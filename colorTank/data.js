
var content = {
    "packs": {
        "2f24a266-ee20-11e3-a9b3-22000a4a0339": {
            "settings": {"physics": {"gravity": [0.0, -9.8, 0.0]}, "render": {"fog_end": 1000.0, "fog_start": 1.0, "shadow_distance": 40.0, "global_ambient": [0.0784313753247261, 0.10588235408067703, 0.14901961386203766, 1.0], "fog_color": [0.0, 0.0, 0.0], "fog": "none", "fog_density": 0.01}},
            "hierarchy": {
                "resource_id": "2f24a266-ee20-11e3-a9b3-22000a4a0339",
                "name": "colorTank",
                "parent": null,
                "children": [{"scale": [1, 1, 1], "name": "tanks", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "de02aafc-4b1c-466a-bde6-3ec7ff35f38e", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": []}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "camera", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "2f24a568-ee20-11e3-a9b3-22000a4a0339", "labels": [], "enabled": true, "components": {"camera": {"priority": 0.0, "fov": 45.0, "clearDepthBuffer": true, "projection": 0.0, "clearColor": [0.0784313753247261, 0.10588235408067703, 0.14901961386203766, 1.0], "enabled": true, "orthoHeight": 100.0, "farClip": 32.0, "nearClip": 1.0, "rect": [0.0, 0.0, 1.0, 1.0], "clearColorBuffer": true}, "script": {"enabled": true, "scripts": [{"url": "link.js", "attributes": [], "name": "link"}]}}, "position": [0, 16, 9], "rotation": [-60, 0, 0], "children": [{"scale": [1, 1, 1], "name": "sun", "parent": "2f24a568-ee20-11e3-a9b3-22000a4a0339", "resource_id": "902e5c57-c549-4a2a-b7bc-f3467b99b401", "labels": [], "enabled": true, "components": {"light": {"color": [1.0, 0.8039215803146362, 0.7333333492279053], "shadowResolution": 2048.0, "outerConeAngle": 33.0, "enabled": true, "range": 1024.0, "castShadows": true, "intensity": 1.0, "innerConeAngle": 14.0, "type": "spot"}}, "position": [4.369138717651367, 15.944684982299805, -4.272365570068359], "rotation": [50, 15, 0], "children": [], "template": null}], "template": null}, {"scale": [64, 1, 64], "name": "floor", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "968350de-9caa-4fbf-97ec-a6f5f2dce253", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "1103bb06-ee24-11e3-b8bb-22000a4a0339", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, -0.5, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "tank", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "0a9d36c4-01f6-4930-a42d-660b7d02ef85", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "tank.js", "attributes": [], "name": "tank"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "head", "parent": "0a9d36c4-01f6-4930-a42d-660b7d02ef85", "resource_id": "7e82caa8-1d7a-4761-8480-e8253b01bf7c", "labels": [], "enabled": true, "components": {}, "position": [0, 0, -0.1], "rotation": [0, 0, 0], "children": [{"scale": [0.2, 0.2, 1], "name": "gun", "parent": "7e82caa8-1d7a-4761-8480-e8253b01bf7c", "resource_id": "6f93c2a0-a5f9-4c76-94ca-822b8f87be4f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "7aac62fa-ee25-11e3-8cb1-22000a4a0339", "receiveShadows": true, "enabled": true, "castShadows": true, "asset": null, "type": "box"}, "script": {"enabled": true, "scripts": [{"url": "tank_sub_model.js", "attributes": [], "name": "tank_sub_model"}]}}, "position": [0, 0.65, 0.9], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "hp", "parent": "7e82caa8-1d7a-4761-8480-e8253b01bf7c", "resource_id": "2a0b2692-562a-4b49-9465-2cc62390efab", "labels": [], "enabled": true, "components": {}, "position": [0, 1.5, 0], "rotation": [0, 0, 0], "children": [{"scale": [0.5, 0.1, 0.1], "name": "left", "parent": "2a0b2692-562a-4b49-9465-2cc62390efab", "resource_id": "596e201c-5e11-4b86-b433-05a216dc8ea1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "d3cedcfa-ee61-11e3-9350-22000a4a0339", "receiveShadows": false, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [-0.25, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.1, 0.1], "name": "right", "parent": "2a0b2692-562a-4b49-9465-2cc62390efab", "resource_id": "8b2f4ac1-d271-472f-83a4-88066f7798ca", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "ec170012-ee61-11e3-9046-22000a4a0339", "receiveShadows": false, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0.25, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [0.8, 0.3, 0.8], "name": "body", "parent": "7e82caa8-1d7a-4761-8480-e8253b01bf7c", "resource_id": "3bbc4145-97b8-4d52-a009-7afe2b6d26ed", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "7aac62fa-ee25-11e3-8cb1-22000a4a0339", "receiveShadows": true, "enabled": true, "castShadows": true, "asset": null, "type": "box"}, "script": {"enabled": true, "scripts": [{"url": "tank_sub_model.js", "attributes": [], "name": "tank_sub_model"}]}}, "position": [0, 0.6499999761581421, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "light", "parent": "0a9d36c4-01f6-4930-a42d-660b7d02ef85", "resource_id": "448f76c5-c906-4950-8a4e-881a3d9312cc", "labels": [], "enabled": false, "components": {"light": {"color": [0.0, 1.0, 0.0313725508749485], "shadowResolution": 1024.0, "outerConeAngle": 45.0, "enabled": true, "range": 8.0, "castShadows": false, "intensity": 1.0, "innerConeAngle": 40.0, "type": "point"}}, "position": [0, 1.8089852333068848, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 0.4, 1.5], "name": "body", "parent": "0a9d36c4-01f6-4930-a42d-660b7d02ef85", "resource_id": "e7f6bdde-d943-4fe7-8edd-a43b137d39c1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "7aac62fa-ee25-11e3-8cb1-22000a4a0339", "receiveShadows": true, "enabled": true, "castShadows": true, "asset": null, "type": "box"}, "script": {"enabled": true, "scripts": [{"url": "tank_sub_model.js", "attributes": [], "name": "tank_sub_model"}]}}, "position": [0, 0.25, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [0.2, 0.2, 0.2], "name": "bullet", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "58834854-2772-4673-9150-22f97285f8e4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "5f4a6510-ee49-11e3-a61e-22000a4a0339", "receiveShadows": true, "enabled": true, "castShadows": true, "asset": null, "type": "sphere"}, "script": {"enabled": true, "scripts": [{"url": "bullet.js", "attributes": [], "name": "bullet"}]}}, "position": [-1.6596448421478271, 0.6499999761581421, 0.7904618978500366], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "blocks", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "3d150121-b8bc-4ce4-9e2c-07335a333b54", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [4, 1, 4], "name": "block", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "e8f49b33-3d55-49ae-a025-746d1ef71624", "labels": [], "enabled": false, "components": {"model": {"materialAsset": "0f68f82a-f661-11e3-9c26-22000a4a0339", "receiveShadows": true, "enabled": true, "castShadows": true, "asset": null, "type": "box"}}, "position": [2, 0.5, 2], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "bullets", "parent": "2f24a266-ee20-11e3-a9b3-22000a4a0339", "resource_id": "996a3589-e3a7-4c09-acc5-dcd0a4d14407", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}],
                "labels": [],
                "position": [0, 0, 0],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "enabled": true,
                "components": {"pack": {}, "script": {"enabled": true, "scripts": [{"url": "network.js", "attributes": [], "name": "network"}, {"url": "client.js", "attributes": [], "name": "client"}, {"url": "tanks.js", "attributes": [], "name": "tanks"}, {"url": "bullets.js", "attributes": [], "name": "bullets"}, {"url": "minimap.js", "attributes": [], "name": "minimap"}]}}
            }
        }
    },
    "application_properties": {
        "resolution_mode": "AUTO",
        "fill_mode": "FILL_WINDOW",
        "width": 1280,
        "height": 720,
        "engine_version": "stable",
        "libraries": []
    },
    toc: {
    "default": {
        "assets": {
            "0e1e7d4a-ee24-11e3-887c-22000a4a0339": {
                "_id": "5392d7d5e559310d510218f5", 
                "created_at": "2014-06-07T09:13:57.435000", 
                "data": {
                    "addressu": "repeat", 
                    "addressv": "repeat", 
                    "anisotropy": 1, 
                    "magfilter": "linear", 
                    "minfilter": "linear_mip_linear", 
                    "name": "floor"
                }, 
                "deleted": false, 
                "file": {
                    "filename": "floor.jpg", 
                    "hash": "40558348e9d68e727fa508ae7ca1ca40", 
                    "size": 45792, 
                    "url": "assets/max/tanky/0e/0e1e7d4a-ee24-11e3-887c-22000a4a0339/floor.jpg"
                }, 
                "has_thumbnail": true, 
                "modified_at": "2014-06-07T09:13:57.435000", 
                "name": "floor", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "0e1e7d4a-ee24-11e3-887c-22000a4a0339", 
                "source": false, 
                "source_asset_id": "0d3d9352-ee24-11e3-93fc-22000a4a0339", 
                "task": null, 
                "thumbnails": {
                    "l": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/0e1e7d4a-ee24-11e3-887c-22000a4a0339/large.jpg", 
                    "m": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/0e1e7d4a-ee24-11e3-887c-22000a4a0339/medium.jpg", 
                    "s": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/0e1e7d4a-ee24-11e3-887c-22000a4a0339/small.jpg", 
                    "xl": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/0e1e7d4a-ee24-11e3-887c-22000a4a0339/xlarge.jpg"
                }, 
                "type": "texture", 
                "version": 3
            }, 
            "0f68f82a-f661-11e3-9c26-22000a4a0339": {
                "_id": "53a0aa28e559314d8ea52e1f", 
                "created_at": "2014-06-17T20:50:48.204000", 
                "data": {
                    "name": "block", 
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398, 
                                0.6980392336845398, 
                                0.6980392336845398
                            ], 
                            "name": "ambient", 
                            "type": "vec3"
                        }, 
                        {
                            "data": [
                                0.6980392336845398, 
                                0.6980392336845398, 
                                0.6980392336845398
                            ], 
                            "name": "diffuse", 
                            "type": "vec3"
                        }, 
                        {
                            "data": "0e1e7d4a-ee24-11e3-887c-22000a4a0339", 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "diffuseMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "diffuseMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": "0e1e7d4a-ee24-11e3-887c-22000a4a0339", 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "specularMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "specularMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 25, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "glossMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "glossMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "emissiveMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "emissiveMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "opacityMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "opacityMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "bumpMapFactor", 
                            "type": "float"
                        }, 
                        {
                            "data": "a5c0aff6-ee24-11e3-887c-22000a4a0339", 
                            "name": "normalMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "normalMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "normalMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "reflectivity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "sphereMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "lightMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": true, 
                            "name": "depthTest", 
                            "type": "boolean"
                        }, 
                        {
                            "data": true, 
                            "name": "depthWrite", 
                            "type": "boolean"
                        }, 
                        {
                            "data": 1, 
                            "name": "cull", 
                            "type": "float"
                        }, 
                        {
                            "data": 2, 
                            "name": "blendType", 
                            "type": "float"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-17T20:51:16.221000", 
                "name": "block", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "0f68f82a-f661-11e3-9c26-22000a4a0339", 
                "source": false, 
                "source_asset_id": null, 
                "task": {
                    "messages": [], 
                    "status": "running"
                }, 
                "type": "material", 
                "version": 3
            }, 
            "1103bb06-ee24-11e3-b8bb-22000a4a0339": {
                "_id": "5392d7dae559310d79ad1214", 
                "created_at": "2014-06-07T09:14:02.293000", 
                "data": {
                    "name": "floor", 
                    "parameters": [
                        {
                            "data": [
                                0.0784313753247261, 
                                0.08627451211214066, 
                                0.10196078568696976
                            ], 
                            "name": "ambient", 
                            "type": "vec3"
                        }, 
                        {
                            "data": [
                                0.6980392336845398, 
                                0.6980392336845398, 
                                0.6980392336845398
                            ], 
                            "name": "diffuse", 
                            "type": "vec3"
                        }, 
                        {
                            "data": "49ff2354-f663-11e3-9121-22000a4a0339", 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                16, 
                                16
                            ], 
                            "name": "diffuseMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "diffuseMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": "0e1e7d4a-ee24-11e3-887c-22000a4a0339", 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                16, 
                                16
                            ], 
                            "name": "specularMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "specularMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 16, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "glossMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "glossMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                16, 
                                16
                            ], 
                            "name": "emissiveMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "emissiveMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "opacityMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "opacityMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "bumpMapFactor", 
                            "type": "float"
                        }, 
                        {
                            "data": "70869ef8-f663-11e3-9121-22000a4a0339", 
                            "name": "normalMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                16, 
                                16
                            ], 
                            "name": "normalMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "normalMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 0.05, 
                            "name": "reflectivity", 
                            "type": "float"
                        }, 
                        {
                            "data": "ee46b5b8-f662-11e3-9121-22000a4a0339", 
                            "name": "sphereMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "lightMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": true, 
                            "name": "depthTest", 
                            "type": "boolean"
                        }, 
                        {
                            "data": false, 
                            "name": "depthWrite", 
                            "type": "boolean"
                        }, 
                        {
                            "data": 1, 
                            "name": "cull", 
                            "type": "float"
                        }, 
                        {
                            "data": 2, 
                            "name": "blendType", 
                            "type": "float"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-17T21:13:11.996000", 
                "name": "floor", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "1103bb06-ee24-11e3-b8bb-22000a4a0339", 
                "source": false, 
                "source_asset_id": null, 
                "task": {
                    "messages": [], 
                    "status": "running"
                }, 
                "type": "material", 
                "version": 3
            }, 
            "49ff2354-f663-11e3-9121-22000a4a0339": {
                "_id": "53a0ade5e559314d6632c887", 
                "created_at": "2014-06-17T21:06:45.489000", 
                "data": {
                    "addressu": "repeat", 
                    "addressv": "repeat", 
                    "anisotropy": 1, 
                    "magfilter": "linear", 
                    "minfilter": "linear_mip_linear", 
                    "name": "floor"
                }, 
                "deleted": false, 
                "file": {
                    "filename": "floor.png", 
                    "hash": "f3c1f9bee760eef6fca1237f413ed5c3", 
                    "size": 11606, 
                    "url": "assets/max/tanky/49/49ff2354-f663-11e3-9121-22000a4a0339/floor.png"
                }, 
                "has_thumbnail": true, 
                "modified_at": "2014-06-17T21:06:45.489000", 
                "name": "floor", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "49ff2354-f663-11e3-9121-22000a4a0339", 
                "source": false, 
                "source_asset_id": "4919f2e8-f663-11e3-ad39-22000a4a0339", 
                "task": null, 
                "thumbnails": {
                    "l": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/49ff2354-f663-11e3-9121-22000a4a0339/large.jpg", 
                    "m": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/49ff2354-f663-11e3-9121-22000a4a0339/medium.jpg", 
                    "s": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/49ff2354-f663-11e3-9121-22000a4a0339/small.jpg", 
                    "xl": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/49ff2354-f663-11e3-9121-22000a4a0339/xlarge.jpg"
                }, 
                "type": "texture", 
                "version": 3
            }, 
            "5f4a6510-ee49-11e3-a61e-22000a4a0339": {
                "_id": "53931670e559310d79ad1289", 
                "created_at": "2014-06-07T13:41:04.997000", 
                "data": {
                    "name": "bullet", 
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398, 
                                0.6980392336845398, 
                                0.6980392336845398
                            ], 
                            "name": "ambient", 
                            "type": "vec3"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "diffuse", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "diffuseMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "diffuseMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "specularMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "specularMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 25, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "glossMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "glossMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0.5058823823928833, 
                                0.5058823823928833, 
                                0.5058823823928833
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "emissiveMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "emissiveMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "opacityMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "opacityMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "bumpMapFactor", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "normalMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "normalMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "normalMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "reflectivity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "sphereMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "lightMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": true, 
                            "name": "depthTest", 
                            "type": "boolean"
                        }, 
                        {
                            "data": true, 
                            "name": "depthWrite", 
                            "type": "boolean"
                        }, 
                        {
                            "data": 1, 
                            "name": "cull", 
                            "type": "float"
                        }, 
                        {
                            "data": 2, 
                            "name": "blendType", 
                            "type": "float"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-07T13:41:40.166000", 
                "name": "bullet", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "5f4a6510-ee49-11e3-a61e-22000a4a0339", 
                "source": false, 
                "source_asset_id": null, 
                "task": {
                    "messages": [], 
                    "status": "running"
                }, 
                "type": "material", 
                "version": 3
            }, 
            "70869ef8-f663-11e3-9121-22000a4a0339": {
                "_id": "53a0ae26e559314d6732c881", 
                "created_at": "2014-06-17T21:07:50.130000", 
                "data": {
                    "addressu": "repeat", 
                    "addressv": "repeat", 
                    "anisotropy": 1, 
                    "magfilter": "linear", 
                    "minfilter": "linear_mip_linear", 
                    "name": "floor_normal_2"
                }, 
                "deleted": false, 
                "file": {
                    "filename": "floor_normal_2.png", 
                    "hash": "af6b1497f6b95ee8d32703f8f31631a6", 
                    "size": 27298, 
                    "url": "assets/max/tanky/70/70869ef8-f663-11e3-9121-22000a4a0339/floor_normal_2.png"
                }, 
                "has_thumbnail": true, 
                "modified_at": "2014-06-17T21:07:50.130000", 
                "name": "floor_normal_2", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "70869ef8-f663-11e3-9121-22000a4a0339", 
                "source": false, 
                "source_asset_id": "6f98ebae-f663-11e3-a8a9-22000a4a0339", 
                "task": null, 
                "thumbnails": {
                    "l": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/70869ef8-f663-11e3-9121-22000a4a0339/large.jpg", 
                    "m": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/70869ef8-f663-11e3-9121-22000a4a0339/medium.jpg", 
                    "s": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/70869ef8-f663-11e3-9121-22000a4a0339/small.jpg", 
                    "xl": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/70869ef8-f663-11e3-9121-22000a4a0339/xlarge.jpg"
                }, 
                "type": "texture", 
                "version": 3
            }, 
            "7aac62fa-ee25-11e3-8cb1-22000a4a0339": {
                "_id": "5392da39e559310d79ad1218", 
                "created_at": "2014-06-07T09:24:09.056000", 
                "data": {
                    "name": "tank", 
                    "parameters": [
                        {
                            "data": [
                                0.11764705926179886, 
                                0.16470588743686676, 
                                0.25882354378700256
                            ], 
                            "name": "ambient", 
                            "type": "vec3"
                        }, 
                        {
                            "data": [
                                0.501960813999176, 
                                0.125490203499794, 
                                0.125490203499794
                            ], 
                            "name": "diffuse", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "diffuseMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "diffuseMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0.20000000298023224, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "specularMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "specularMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 25, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "glossMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "glossMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0.05098039284348488, 
                                0, 
                                0
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "emissiveMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "emissiveMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "opacityMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "opacityMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "bumpMapFactor", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "normalMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "normalMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "normalMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "reflectivity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "sphereMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "lightMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": true, 
                            "name": "depthTest", 
                            "type": "boolean"
                        }, 
                        {
                            "data": true, 
                            "name": "depthWrite", 
                            "type": "boolean"
                        }, 
                        {
                            "data": 1, 
                            "name": "cull", 
                            "type": "float"
                        }, 
                        {
                            "data": 2, 
                            "name": "blendType", 
                            "type": "float"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-07T09:30:45.158000", 
                "name": "tank", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "7aac62fa-ee25-11e3-8cb1-22000a4a0339", 
                "source": false, 
                "source_asset_id": null, 
                "task": {
                    "messages": [], 
                    "status": "running"
                }, 
                "type": "material", 
                "version": 3
            }, 
            "a5c0aff6-ee24-11e3-887c-22000a4a0339": {
                "_id": "5392d8d3e559310d510218f6", 
                "created_at": "2014-06-07T09:18:11.834000", 
                "data": {
                    "addressu": "repeat", 
                    "addressv": "repeat", 
                    "anisotropy": 1, 
                    "magfilter": "linear", 
                    "minfilter": "linear_mip_linear", 
                    "name": "floor_normal"
                }, 
                "deleted": false, 
                "file": {
                    "filename": "floor_normal.png", 
                    "hash": "e7da6e57385a871696919da3748d4163", 
                    "size": 114158, 
                    "url": "assets/max/tanky/a5/a5c0aff6-ee24-11e3-887c-22000a4a0339/floor_normal.png"
                }, 
                "has_thumbnail": true, 
                "modified_at": "2014-06-07T09:18:11.834000", 
                "name": "floor_normal", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "a5c0aff6-ee24-11e3-887c-22000a4a0339", 
                "source": false, 
                "source_asset_id": "a4bb7c8a-ee24-11e3-b8bb-22000a4a0339", 
                "task": null, 
                "thumbnails": {
                    "l": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/a5c0aff6-ee24-11e3-887c-22000a4a0339/large.jpg", 
                    "m": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/a5c0aff6-ee24-11e3-887c-22000a4a0339/medium.jpg", 
                    "s": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/a5c0aff6-ee24-11e3-887c-22000a4a0339/small.jpg", 
                    "xl": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/a5c0aff6-ee24-11e3-887c-22000a4a0339/xlarge.jpg"
                }, 
                "type": "texture", 
                "version": 3
            }, 
            "d3cedcfa-ee61-11e3-9350-22000a4a0339": {
                "_id": "53933f78e559310d79ad12c0", 
                "created_at": "2014-06-07T16:36:08.403000", 
                "data": {
                    "name": "hp_left", 
                    "parameters": [
                        {
                            "data": [
                                0, 
                                0.7058823704719543, 
                                0
                            ], 
                            "name": "ambient", 
                            "type": "vec3"
                        }, 
                        {
                            "data": [
                                0, 
                                1, 
                                0
                            ], 
                            "name": "diffuse", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "diffuseMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "diffuseMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "specularMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "specularMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 25, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "glossMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "glossMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                1, 
                                0
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "emissiveMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "emissiveMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "opacityMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "opacityMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "bumpMapFactor", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "normalMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "normalMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "normalMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "reflectivity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "sphereMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "lightMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": true, 
                            "name": "depthTest", 
                            "type": "boolean"
                        }, 
                        {
                            "data": true, 
                            "name": "depthWrite", 
                            "type": "boolean"
                        }, 
                        {
                            "data": 1, 
                            "name": "cull", 
                            "type": "float"
                        }, 
                        {
                            "data": 2, 
                            "name": "blendType", 
                            "type": "float"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-07T16:36:35.133000", 
                "name": "hp_left", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "d3cedcfa-ee61-11e3-9350-22000a4a0339", 
                "source": false, 
                "source_asset_id": null, 
                "task": {
                    "messages": [], 
                    "status": "running"
                }, 
                "type": "material", 
                "version": 3
            }, 
            "ec170012-ee61-11e3-9046-22000a4a0339": {
                "_id": "53933fa1e559310d79ad12c1", 
                "created_at": "2014-06-07T16:36:49.141000", 
                "data": {
                    "name": "hp_right", 
                    "parameters": [
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "ambient", 
                            "type": "vec3"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "diffuse", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "diffuseMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "diffuseMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "specularMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "specularMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 25, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "glossMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "glossMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "emissiveMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "emissiveMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "opacityMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "opacityMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "bumpMapFactor", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "normalMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": [
                                1, 
                                1
                            ], 
                            "name": "normalMapTiling", 
                            "type": "vec2"
                        }, 
                        {
                            "data": [
                                0, 
                                0
                            ], 
                            "name": "normalMapOffset", 
                            "type": "vec2"
                        }, 
                        {
                            "data": 1, 
                            "name": "reflectivity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "sphereMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "lightMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": true, 
                            "name": "depthTest", 
                            "type": "boolean"
                        }, 
                        {
                            "data": true, 
                            "name": "depthWrite", 
                            "type": "boolean"
                        }, 
                        {
                            "data": 1, 
                            "name": "cull", 
                            "type": "float"
                        }, 
                        {
                            "data": 2, 
                            "name": "blendType", 
                            "type": "float"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-07T16:37:05.604000", 
                "name": "hp_right", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "ec170012-ee61-11e3-9046-22000a4a0339", 
                "source": false, 
                "source_asset_id": null, 
                "task": {
                    "messages": [], 
                    "status": "running"
                }, 
                "type": "material", 
                "version": 3
            }, 
            "ee46b5b8-f662-11e3-9121-22000a4a0339": {
                "_id": "53a0ad4be559314d6632c886", 
                "created_at": "2014-06-17T21:04:11.608000", 
                "data": {
                    "addressu": "repeat", 
                    "addressv": "repeat", 
                    "anisotropy": 1, 
                    "magfilter": "linear", 
                    "minfilter": "linear_mip_linear", 
                    "name": "post-2-1132771187"
                }, 
                "deleted": false, 
                "file": {
                    "filename": "post-2-1132771187.jpg", 
                    "hash": "7ef1baf5bafde45801efee8b2b331985", 
                    "size": 16902, 
                    "url": "assets/max/tanky/ee/ee46b5b8-f662-11e3-9121-22000a4a0339/post-2-1132771187.jpg"
                }, 
                "has_thumbnail": true, 
                "modified_at": "2014-06-17T21:04:11.608000", 
                "name": "post-2-1132771187", 
                "owner_id": 4373, 
                "project_id": 45093, 
                "resource_id": "ee46b5b8-f662-11e3-9121-22000a4a0339", 
                "source": false, 
                "source_asset_id": "ed449efa-f662-11e3-8995-22000a4a0339", 
                "task": null, 
                "thumbnails": {
                    "l": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/ee46b5b8-f662-11e3-9121-22000a4a0339/large.jpg", 
                    "m": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/ee46b5b8-f662-11e3-9121-22000a4a0339/medium.jpg", 
                    "s": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/ee46b5b8-f662-11e3-9121-22000a4a0339/small.jpg", 
                    "xl": "http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/assets/4373/45093/ee46b5b8-f662-11e3-9121-22000a4a0339/xlarge.jpg"
                }, 
                "type": "texture", 
                "version": 3
            }
        }, 
        "packs": [
            "2f24a266-ee20-11e3-a9b3-22000a4a0339"
        ]
    }
}
};
pc.content = new pc.fw.ContentFile(content);