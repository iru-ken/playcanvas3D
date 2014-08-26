pc.gfx.ShaderInputType = {
    BOOL: 0,
    INT: 1,
    FLOAT: 2,
    VEC2: 3,
    VEC3: 4,
    VEC4: 5,
    IVEC2: 6,
    IVEC3: 7,
    IVEC4: 8,
    BVEC2: 9,
    BVEC3: 10,
    BVEC4: 11,
    MAT2: 12,
    MAT3: 13,
    MAT4: 14,
    TEXTURE2D: 15,
    TEXTURECUBE: 16
};

pc.gfx.ShaderInput = function (graphicsDevice, name, type, locationId) {
    // Set the shader attribute location
    this.locationId = locationId;

    // Resolve the ScopeId for the attribute name
    this.scopeId = graphicsDevice.scope.resolve(name);

    // Create the version
    this.version = new pc.gfx.Version();

    // Set the data type
    this.dataType = type;

/*
    var gl = graphicsDevice.gl;
    this.isMatrix = false;
    switch (type) {
        case pc.gfx.ShaderInputType.BOOL:
        case pc.gfx.ShaderInputType.INT:
            this.commitFunc = gl['uniform1i'];
            break;
        case pc.gfx.ShaderInputType.FLOAT:
            this.commitFunc = gl['uniform1f'];
            break;
        case pc.gfx.ShaderInputType.BVEC2:
        case pc.gfx.ShaderInputType.IVEC2:
            this.commitFunc = gl['uniform2iv'];
            break;
        case pc.gfx.ShaderInputType.VEC2:
            this.commitFunc = gl['uniform2fv'];
            break;
        case pc.gfx.ShaderInputType.BVEC3:
        case pc.gfx.ShaderInputType.IVEC3:
            this.commitFunc = gl['uniform3iv'];
            break;
        case pc.gfx.ShaderInputType.VEC3:
            this.commitFunc = gl['uniform3fv'];
            break;
        case pc.gfx.ShaderInputType.BVEC4:
        case pc.gfx.ShaderInputType.IVEC4:
            this.commitFunc = gl['uniform4iv'];
            break;
        case pc.gfx.ShaderInputType.VEC4:
            this.commitFunc = gl['uniform4fv'];
            break;
        case pc.gfx.ShaderInputType.MAT2:
            this.commitFunc = gl['uniformMatrix2fv'];
            this.isMatrix = true;
            break;
        case pc.gfx.ShaderInputType.MAT3:
            this.commitFunc = gl['uniformMatrix3fv'];
            this.isMatrix = true;
            break;
        case pc.gfx.ShaderInputType.MAT4:
            this.commitFunc = gl['uniformMatrix4fv'];
            this.isMatrix = true;
            break;
    }
*/
};
