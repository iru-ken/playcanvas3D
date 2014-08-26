pc.extend(pc.fw, function () {
    CubeMapComponentData = function () {
        this.camera = null;        
        this.nearClip = 1;
        this.farClip = 100000;
        this.width = 256;
        this.height = 256;
        this.enabled = true;
    };
    CubeMapComponentData = pc.inherits(CubeMapComponentData, pc.fw.ComponentData);
    
    return {
        CubeMapComponentData: CubeMapComponentData
    };
}());