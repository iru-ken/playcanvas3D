pc.gfx.programlib.depth = {
    generateKey: function (device, options) {
        var key = "depth";
        if (options.skin) key += "_skin";
        if (options.opacityMap) key += "_opam";
        return key;
    },

    createShaderDefinition: function (device, options) {
        /////////////////////////
        // GENERATE ATTRIBUTES //
        /////////////////////////
        var attributes = {
            vertex_position: pc.gfx.SEMANTIC_POSITION
        }
        if (options.skin) {
            attributes.vertex_boneWeights = pc.gfx.SEMANTIC_BLENDWEIGHT;
            attributes.vertex_boneIndices = pc.gfx.SEMANTIC_BLENDINDICES;
        }
        if (options.opacityMap) {
            attributes.vertex_texCoord0 = pc.gfx.SEMANTIC_TEXCOORD0;
        }

        ////////////////////////////
        // GENERATE VERTEX SHADER //
        ////////////////////////////
        var getSnippet = pc.gfx.programlib.getSnippet;
        var code = '';

        // VERTEX SHADER DECLARATIONS
        if (options.skin) {
            code += getSnippet(device, 'vs_skin_position_decl');
        } else {
            code += getSnippet(device, 'vs_static_position_decl');
        }

        if (options.opacityMap) {
            code += "attribute vec2 vertex_texCoord0;\n\n";
            code += 'varying vec2 vUv0;\n\n';
        }

        // VERTEX SHADER BODY
        code += getSnippet(device, 'common_main_begin');

        // Skinning is performed in world space
        if (options.skin) {
            code += getSnippet(device, 'vs_skin_position');
        } else {
            code += getSnippet(device, 'vs_static_position');
        }

        if (options.opacityMap) {
            code += '    vUv0 = vertex_texCoord0;\n';
        }

        code += getSnippet(device, 'common_main_end');
        
        var vshader = code;

        //////////////////////////////
        // GENERATE FRAGMENT SHADER //
        //////////////////////////////
        code = getSnippet(device, 'fs_precision');

        code += 'uniform float camera_near;\n';
        code += 'uniform float camera_far;\n';

        // FRAGMENT SHADER BODY
        code += getSnippet(device, 'common_main_begin');

        code += "float depth = gl_FragCoord.z / gl_FragCoord.w;";
        code += "float color = 1.0 - smoothstep(camera_near, camera_far, depth);";
        code += "gl_FragColor = vec4(vec3(color), 1.0);";

        code += getSnippet(device, 'common_main_end');

        var fshader = code;

        return {
            attributes: attributes,
            vshader: vshader,
            fshader: fshader
        };
    }
};