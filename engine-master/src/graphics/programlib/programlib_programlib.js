/**
 * @namespace
 * @name pc.gfx.programlib
 */
pc.gfx.programlib = {
    getSnippet: function (device, id) {
        var code = '';

        switch (id) {
             case 'common_main_begin':
                code +=    'void main(void)\n{\n';
                break;

            case 'common_main_end':
                code += '}\n';
                break;

            //////////////////////////////
            // FRAGMENT SHADER SNIPPETS //
            //////////////////////////////
            case 'fs_alpha_test_decl':
                code += 'uniform float alpha_ref;\n';
                break;

            case 'fs_alpha_test':
                code += '    if (gl_FragColor.a < alpha_ref) discard;\n\n';
                break;

            case 'fs_clamp':
                code += '    gl_FragColor = clamp(gl_FragColor, 0.0, 1.0);\n';
                break;

            case 'fs_flat_color_decl':
                code += 'uniform vec4 uColor;\n';
                break;

            case 'fs_flat_color':
                code += '    gl_FragColor = uColor;\n';
                break;


            case 'fs_fog_linear_decl':
            case 'fs_fog_exp_decl':
            case 'fs_fog_exp2_decl':
                code += 'uniform vec3 fog_color;\n';
                if (id === 'fs_fog_linear_decl') {
                    code += 'uniform float fog_start;\n';
                    code += 'uniform float fog_end;\n\n';
                } else {
                    code += 'uniform float fog_density;\n\n';
                }
                break;

            case 'fs_fog_linear':
            case 'fs_fog_exp':
            case 'fs_fog_exp2':
                code += '    float depth = gl_FragCoord.z / gl_FragCoord.w;\n';
                if (id === 'fs_fog_linear') {
                    code += '    float fogFactor = (fog_end - depth) / (fog_end - fog_start);\n';
                } else if (id === 'fs_fog_exp') {
                    code += '    float fogFactor = exp(-depth * fog_density);\n';
                } else {
                    code += '    float fogFactor = exp(-depth * depth * fog_density * fog_density);\n';
                }
                code += '    fogFactor = clamp(fogFactor, 0.0, 1.0);\n';
                code += '    gl_FragColor.rgb = mix(fog_color, gl_FragColor.rgb, fogFactor);\n';
                break;

            case 'fs_precision':
                code += 'precision ' + device.precision + ' float;\n\n';
                break;

            case 'fs_height_map_funcs':
                code += 'vec3 perturb_normal( vec3 N, vec3 p, vec2 uv )\n';
                code += '{\n';
                code += '    vec3 dp1 = dFdx( p );\n';
                code += '    vec3 dp2 = dFdy( p );\n';
                code += '    vec2 duv1 = dFdx( uv );\n';
                code += '    vec2 duv2 = dFdy( uv );\n\n';

                code += '    vec3 dp2perp = cross( dp2, N );\n';
                code += '    vec3 dp1perp = cross( N, dp1 );\n\n';

                code += '    const float bumpScale = 0.125;\n';
                code += '    float Hll = bumpScale * texture2D( texture_heightMap, uv ).x;\n';
                code += '    float dBx = bumpScale * texture2D( texture_heightMap, uv + duv1 ).x - Hll;\n';
                code += '    float dBy = bumpScale * texture2D( texture_heightMap, uv + duv2 ).x - Hll;\n\n';

                code += '    float fDet = dot( dp1, dp2perp );\n';
                code += '    vec3 vGrad = sign( fDet ) * ( dBx * dp2perp + dBy * dp1perp );\n';
                code += '    return normalize( abs( fDet ) * N - vGrad );\n';
                code += '}\n\n';
                break;

            case 'fs_normal_map_funcs':
                if (!pc.gfx.precalculatedTangents) {
                    code += 'mat3 cotangent_frame( vec3 N, vec3 p, vec2 uv )\n';
                    code += '{\n';
                                 // get edge vectors of the pixel triangle
                    code += '    vec3 dp1 = dFdx( p );\n';
                    code += '    vec3 dp2 = dFdy( p );\n';
                    code += '    vec2 duv1 = dFdx( uv );\n';
                    code += '    vec2 duv2 = dFdy( uv );\n\n';

                                 // solve the linear system
                    code += '    vec3 dp2perp = cross( dp2, N );\n';
                    code += '    vec3 dp1perp = cross( N, dp1 );\n';
                    code += '    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;\n';
                    code += '    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;\n\n';

                                 // construct a scale-invariant frame 
                    code += '    float invmax = inversesqrt( max( dot(T,T), dot(B,B) ) );\n';
                    code += '    return mat3( T * invmax, B * invmax, N );\n';
                    code += '}\n\n';

                    code += 'vec3 perturb_normal( vec3 N, vec3 V, vec2 uv )\n';
                    code += '{\n';
                                 // assume N, the interpolated vertex normal and 
                                 // V, the view vector (vertex to eye)
                    code += '    vec3 map = texture2D( texture_normalMap, uv ).xyz;\n';
                    code += '    map = map * 255./127. - 128./127.;\n';
                    code += '    map.xy = map.xy * material_bumpMapFactor;\n';
                    code += '    mat3 TBN = cotangent_frame( N, -V, uv );\n';
                    code += '    return normalize( TBN * map );\n';
                    code += '}\n\n';
                }
                break;

            ////////////////////////////
            // VERTEX SHADER SNIPPETS //
            ////////////////////////////
            case 'vs_skin_position_decl':
                var numBones = device.getBoneLimit();
                code += 'attribute vec3 vertex_position;\n';
                code += 'attribute vec4 vertex_boneWeights;\n';
                code += 'attribute vec4 vertex_boneIndices;\n';
                code += 'uniform mat4 matrix_pose[' + numBones + '];\n';
                code += 'uniform mat4 matrix_viewProjection;\n\n';
                break;

            case 'vs_skin_position':
                code += '    vec4 position, positionW;\n';
                code += '    position = vec4(vertex_position, 1.0);\n';
                code += '    positionW  = vertex_boneWeights[0] * matrix_pose[int(vertex_boneIndices[0])] * position;\n';
                code += '    positionW += vertex_boneWeights[1] * matrix_pose[int(vertex_boneIndices[1])] * position;\n';
                code += '    positionW += vertex_boneWeights[2] * matrix_pose[int(vertex_boneIndices[2])] * position;\n';
                code += '    positionW += vertex_boneWeights[3] * matrix_pose[int(vertex_boneIndices[3])] * position;\n';
                code += '    gl_Position = matrix_viewProjection * positionW;\n';
                break;

            case 'vs_skin_normal':
                code += '    vec3 normalW, normalE;\n';
                code += '    vec4 normal = vec4(vertex_normal, 0.0);\n';
                code += '    normalW  = (vertex_boneWeights[0] * matrix_pose[int(vertex_boneIndices[0])] * normal).xyz;\n';
                code += '    normalW += (vertex_boneWeights[1] * matrix_pose[int(vertex_boneIndices[1])] * normal).xyz;\n';
                code += '    normalW += (vertex_boneWeights[2] * matrix_pose[int(vertex_boneIndices[2])] * normal).xyz;\n';
                code += '    normalW += (vertex_boneWeights[3] * matrix_pose[int(vertex_boneIndices[3])] * normal).xyz;\n';
                code += '    normalE = normalize((matrix_view * normalW).xyz);\n';
                break;

            case 'vs_skin_tangent':
                code += '    vec3 tangentW, tangentE;\n';
                code += '    vec4 tangent = vec4(vertex_tangent, 0.0);\n';
                code += '    tangentW  = (vertex_boneWeights[0] * matrix_pose[int(vertex_boneIndices[0])] * tangent).xyz;\n';
                code += '    tangentW += (vertex_boneWeights[1] * matrix_pose[int(vertex_boneIndices[1])] * tangent).xyz;\n';
                code += '    tangentW += (vertex_boneWeights[2] * matrix_pose[int(vertex_boneIndices[2])] * tangent).xyz;\n';
                code += '    tangentW += (vertex_boneWeights[3] * matrix_pose[int(vertex_boneIndices[3])] * tangent).xyz;\n';
                code += '    tangentE = normalize((matrix_view * tangentW).xyz);\n';
                break;

            case 'vs_static_position_decl':
                code += 'attribute vec3 vertex_position;\n';
                code += 'uniform mat4 matrix_model;\n';
                code += 'uniform mat4 matrix_viewProjection;\n\n';
                break;

            case 'vs_static_position':
                code += '    vec4 positionW = matrix_model * vec4(vertex_position, 1.0);\n';
                code += '    gl_Position = matrix_viewProjection * positionW;\n';
                break;
        }

        return code;
    }
};
