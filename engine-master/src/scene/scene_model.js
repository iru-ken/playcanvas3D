pc.extend(pc.scene, function () {

    /**
     * @name pc.scene.Model
     * @class A model.
     */
    var Model = function Model() {
        this.graph = null;
        this.meshInstances = [];
        this.skinInstances = [];

        this.cameras = [];
        this.lights = [];
    };

    Model.prototype.getGraph = function () {
        return this.graph;
    };

    Model.prototype.setGraph = function (graph) {
        this.graph = graph;
    };

    Model.prototype.getCameras = function () {
        return this.cameras;
    };

    Model.prototype.setCameras = function (cameras) {
        this.cameras = cameras;
    };

    Model.prototype.getLights = function () {
        return this.lights;
    };

    Model.prototype.setLights = function (lights) {
        this.lights = lights;
    };

    Model.prototype.getTextures = function () {
        return this.textures;
    };

    Model.prototype.getMaterials = function () {
        var i;
        var materials = [];
        for (i = 0; i < this.meshInstances.length; i++) {
            var meshInstance = this.meshInstances[i];
            if (materials.indexOf(meshInstance.material) === -1) {
                materials.push(meshInstance.material);
            }
        }
        return materials;
    };

    /**
     * @function
     * @name pc.scene.Model#clone
     * @description Clones a model. The returned model has a newly created hierarchy
     * but actually just references the geometries of the model being cloned. This is
     * a very memory efficient way of generating lots of copies of a model at runtime.
     * The caveat is that modifications to the cloned model's geometries, submeshes,
     * materials or textures will actually also modify the source model (and vice versa).
     * @returns {pc.scene.Model} A cloned Model.
     * @author Will Eastcott
     */
	Model.prototype.clone = function () {
        var i;

        // Duplicate the node hierarchy
        var srcNodes = [];
        var cloneNodes = [];

        var _duplicate = function (node) {
            var newNode = node.clone();

            srcNodes.push(node);
            cloneNodes.push(newNode);

            if (node instanceof pc.scene.CameraNode)
                clone.cameras.push(newNode);
            else if (node instanceof pc.scene.LightNode)
                clone.lights.push(newNode);

            var children = node.getChildren();
            for (var i = 0; i < children.length; i++) {
                newNode.addChild(_duplicate(children[i]));
            }

            return newNode;
        };

        var cloneGraph = _duplicate(this.graph);
        var cloneMeshInstances = [];
        var cloneSkinInstances = [];

        // Clone the skin instances
        for (i = 0; i < this.skinInstances.length; i++) {
            var skin = this.skinInstances[i].skin;
            var cloneSkinInstance = new pc.scene.SkinInstance(skin);

            // Resolve bone IDs to actual graph nodes
            var bones = [];
            for (j = 0; j < skin.boneNames.length; j++) {
                var boneName = skin.boneNames[j];
                var bone = cloneGraph.findByName(boneName);
                bones.push(bone);
            }
            cloneSkinInstance.bones = bones;

            cloneSkinInstances.push(cloneSkinInstance);
        }

        // Clone the mesh instances
        for (i = 0; i < this.meshInstances.length; i++) {
            var meshInstance = this.meshInstances[i];
            var nodeIndex = srcNodes.indexOf(meshInstance.node);
            var cloneMeshInstance = new pc.scene.MeshInstance(cloneNodes[nodeIndex], meshInstance.mesh, meshInstance.material);

            if (meshInstance.skinInstance) {
                var skinInstanceIndex = this.skinInstances.indexOf(meshInstance.skinInstance);
                cloneMeshInstance.skinInstance = cloneSkinInstances[skinInstanceIndex];
            }

            cloneMeshInstances.push(cloneMeshInstance);
        }

        var clone = new pc.scene.Model();
        clone.graph = cloneGraph;
        clone.meshInstances = cloneMeshInstances;
        clone.skinInstances = cloneSkinInstances;

        clone.getGraph().syncHierarchy();

        var meshInstances = clone.meshInstances;
        for (i = 0; i < meshInstances.length; i++) {
            meshInstances[i].syncAabb();
        }

        return clone;
    };

    Model.prototype.generateWireframe = function () {
        var i, j, k;
        var i1, i2;
        var mesh, base, count, indexBuffer, wireBuffer;
        var srcIndices, dstIndices;

        // Build an array of unique meshes in this model
        var meshes = [];
        for (i = 0; i < this.meshInstances.length; i++) {
            mesh = this.meshInstances[i].mesh;
            if (meshes.indexOf(mesh) === -1) {
                meshes.push(mesh);
            }
        }

        var offsets = [[0, 1], [1, 2], [2, 0]];
        for (i = 0; i < meshes.length; i++) {
            mesh = meshes[i];
            base = mesh.primitive[pc.scene.RENDERSTYLE_SOLID].base;
            count = mesh.primitive[pc.scene.RENDERSTYLE_SOLID].count;
            indexBuffer = mesh.indexBuffer[pc.scene.RENDERSTYLE_SOLID];

            srcIndices = new Uint16Array(indexBuffer.lock());

            var uniqueLineIndices = {};
            var lines = [];
            for (j = base; j < base + count; j+=3) {
                for (k = 0; k < 3; k++) {
                    i1 = srcIndices[j + offsets[k][0]];
                    i2 = srcIndices[j + offsets[k][1]];
                    var line = (i1 > i2) ? ((i2 << 16) | i1) : ((i1 << 16) | i2);
                    if (uniqueLineIndices[line] === undefined) {
                        uniqueLineIndices[line] = 0;
                        lines.push(i1, i2);
                    }
                }
            }

            indexBuffer.unlock();

            wireBuffer = new pc.gfx.IndexBuffer(indexBuffer.device, pc.gfx.INDEXFORMAT_UINT16, lines.length);
            dstIndices = new Uint16Array(wireBuffer.lock());
            dstIndices.set(lines);
            wireBuffer.unlock();

            mesh.primitive[pc.scene.RENDERSTYLE_WIREFRAME] = {
                type: pc.gfx.PRIMITIVE_LINES,
                base: 0,
                count: lines.length,
                indexed: true
            };
            mesh.indexBuffer[pc.scene.RENDERSTYLE_WIREFRAME] = wireBuffer;
        }
    };
    
	return {
		Model: Model
	};
}());