
var content = {
    "packs": {
        "82d91e12-4a83-4a4c-846e-719d9759769b": {
            "settings": {"physics": {"gravity": [0.0, 0.0, 0.0]}, "render": {"fog_end": 1000.0, "fog_start": 1.0, "shadow_distance": 40.0, "global_ambient": [0.0, 0.0, 0.0, 1.0], "fog_color": [0.0, 0.0, 0.0], "fog": "none", "fog_density": 0.01}},
            "hierarchy": {
                "resource_id": "82d91e12-4a83-4a4c-846e-719d9759769b",
                "name": "Pong",
                "parent": null,
                "children": [{"scale": [1, 1, 1], "name": "Camera", "parent": "82d91e12-4a83-4a4c-846e-719d9759769b", "resource_id": "cd2dd381-a986-49e1-bcf2-4b6d622c32bd", "labels": [], "enabled": true, "components": {"camera": {"priority": 0.0, "fov": 45.0, "clearDepthBuffer": true, "projection": 1.0, "clearColor": [0.0, 0.0, 0.0, 1.0], "enabled": true, "orthoHeight": 10.0, "farClip": 20.0, "nearClip": 1.0, "rect": [0.0, 0.0, 1.0, 1.0], "clearColorBuffer": true}, "audiolistener": {"enabled": true}}, "position": [0, 0, 10], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Intro Screen", "parent": "82d91e12-4a83-4a4c-846e-719d9759769b", "resource_id": "cc4f47e0-3e8c-4c3d-a75f-3e94275a5f1c", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "introscreen.js", "attributes": [], "name": "introscreen"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "1 Player", "parent": "cc4f47e0-3e8c-4c3d-a75f-3e94275a5f1c", "resource_id": "7b2d61ac-3fc4-49db-99a0-8b647f27e133", "labels": [], "enabled": true, "components": {"collision": {"enabled": true, "halfExtents": [11.0, 1.1, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "a8117c2c-f356-11e3-87d9-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "tween.js", "attributes": [{"displayName": "startTime", "name": "startTime", "defaultValue": 0, "value": 1.5, "type": "number", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 1, "value": 0.9, "type": "number", "options": {}}, {"displayName": "startPos", "name": "startPos", "defaultValue": [0, 0, 0], "value": [0, -3, 0], "type": "vector", "options": {}}, {"displayName": "endPos", "name": "endPos", "defaultValue": [0, 0, 0], "value": [0, -3, 0], "type": "vector", "options": {}}, {"displayName": "startScale", "name": "startScale", "defaultValue": [1, 1, 1], "value": [1, 1, 1], "type": "vector", "options": {}}, {"displayName": "endScale", "name": "endScale", "defaultValue": [1, 1, 1], "value": [100, 100, 100], "type": "vector", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": 1, "value": 8, "type": "enumeration", "options": {"enumerations": [{"name": "Linear", "value": 0}, {"name": "Quadratic", "value": 1}, {"name": "Cubic", "value": 2}, {"name": "Quartic", "value": 3}, {"name": "Quintic", "value": 4}, {"name": "Sinusoidal", "value": 5}, {"name": "Exponential", "value": 6}, {"name": "Circular", "value": 7}, {"name": "Elastic", "value": 8}, {"name": "Back", "value": 9}, {"name": "Bounce", "value": 10}], "displayName": "easing"}}, {"displayName": "inOut", "name": "inOut", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "In", "value": 0}, {"name": "Out", "value": 1}, {"name": "InOut", "value": 2}], "displayName": "inOut"}}], "name": "tween"}]}}, "position": [0, -3, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [250, 250, 250], "name": "Pong", "parent": "cc4f47e0-3e8c-4c3d-a75f-3e94275a5f1c", "resource_id": "af828cb6-ccff-4c1b-9b05-04bd60ccac38", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "a6f9f43a-f339-11e3-87d9-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "tween.js", "attributes": [{"displayName": "startTime", "name": "startTime", "defaultValue": 0, "value": 0.3, "type": "number", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "startPos", "name": "startPos", "defaultValue": [0, 0, 0], "value": [0, 14, 0], "type": "vector", "options": {}}, {"displayName": "endPos", "name": "endPos", "defaultValue": [0, 0, 0], "value": [0, 4, 0], "type": "vector", "options": {}}, {"displayName": "startScale", "name": "startScale", "defaultValue": [1, 1, 1], "value": [250, 250, 250], "type": "vector", "options": {}}, {"displayName": "endScale", "name": "endScale", "defaultValue": [1, 1, 1], "value": [250, 250, 250], "type": "vector", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": 1, "value": 10, "type": "enumeration", "options": {"enumerations": [{"name": "Linear", "value": 0}, {"name": "Quadratic", "value": 1}, {"name": "Cubic", "value": 2}, {"name": "Quartic", "value": 3}, {"name": "Quintic", "value": 4}, {"name": "Sinusoidal", "value": 5}, {"name": "Exponential", "value": 6}, {"name": "Circular", "value": 7}, {"name": "Elastic", "value": 8}, {"name": "Back", "value": 9}, {"name": "Bounce", "value": 10}], "displayName": "easing"}}, {"displayName": "inOut", "name": "inOut", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "In", "value": 0}, {"name": "Out", "value": 1}, {"name": "InOut", "value": 2}], "displayName": "inOut"}}], "name": "tween"}]}}, "position": [0, 14, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "2 Player", "parent": "cc4f47e0-3e8c-4c3d-a75f-3e94275a5f1c", "resource_id": "e6461827-4e31-4907-b810-0808f5679a1c", "labels": [], "enabled": true, "components": {"collision": {"enabled": true, "halfExtents": [11.0, 1.1, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "a80cd46a-f356-11e3-87d9-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "tween.js", "attributes": [{"displayName": "startTime", "name": "startTime", "defaultValue": 0, "value": 1.8, "type": "number", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 1, "value": 0.9, "type": "number", "options": {}}, {"displayName": "startPos", "name": "startPos", "defaultValue": [0, 0, 0], "value": [0, -7, 0], "type": "vector", "options": {}}, {"displayName": "endPos", "name": "endPos", "defaultValue": [0, 0, 0], "value": [0, -7, 0], "type": "vector", "options": {}}, {"displayName": "startScale", "name": "startScale", "defaultValue": [1, 1, 1], "value": [1, 1, 1], "type": "vector", "options": {}}, {"displayName": "endScale", "name": "endScale", "defaultValue": [1, 1, 1], "value": [100, 100, 100], "type": "vector", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": 1, "value": 8, "type": "enumeration", "options": {"enumerations": [{"name": "Linear", "value": 0}, {"name": "Quadratic", "value": 1}, {"name": "Cubic", "value": 2}, {"name": "Quartic", "value": 3}, {"name": "Quintic", "value": 4}, {"name": "Sinusoidal", "value": 5}, {"name": "Exponential", "value": 6}, {"name": "Circular", "value": 7}, {"name": "Elastic", "value": 8}, {"name": "Back", "value": 9}, {"name": "Bounce", "value": 10}], "displayName": "easing"}}, {"displayName": "inOut", "name": "inOut", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "In", "value": 0}, {"name": "Out", "value": 1}, {"name": "InOut", "value": 2}], "displayName": "inOut"}}], "name": "tween"}]}}, "position": [0, -7, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Game", "parent": "82d91e12-4a83-4a4c-846e-719d9759769b", "resource_id": "c18714bb-fba7-436f-8fd8-9603f126ff10", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": []}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Court", "parent": "c18714bb-fba7-436f-8fd8-9603f126ff10", "resource_id": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [30, 1, 1], "name": "Top", "parent": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "resource_id": "a84fb123-e58f-4a8f-a821-a50dda8174d8", "labels": [], "enabled": true, "components": {"rigidbody": {"linearDamping": 0.0, "enabled": true, "friction": 0.0, "mass": 1.0, "angularDamping": 0.0, "linearFactor": [1.0, 1.0, 1.0], "type": "static", "angularFactor": [1.0, 1.0, 1.0], "restitution": 1.0}, "collision": {"enabled": true, "halfExtents": [15.0, 0.5, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 10, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Bats", "parent": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "resource_id": "64f34ad9-74c7-44ec-b81f-8b2089036f09", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 3, 1], "name": "Player1", "parent": "64f34ad9-74c7-44ec-b81f-8b2089036f09", "resource_id": "6e914697-20b3-4107-8811-d4efa5818dbe", "labels": [], "enabled": true, "components": {"rigidbody": {"linearDamping": 0.0, "enabled": true, "friction": 0.5, "mass": 1.0, "angularDamping": 0.0, "linearFactor": [1.0, 1.0, 1.0], "type": "kinematic", "angularFactor": [1.0, 1.0, 1.0], "restitution": 1.0}, "collision": {"enabled": true, "halfExtents": [0.5, 1.5, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}, "script": {"enabled": true, "scripts": [{"url": "bat.js", "attributes": [{"displayName": "upperBound", "name": "upperBound", "defaultValue": 8, "value": 8, "type": "number", "options": {}}, {"displayName": "lowerBound", "name": "lowerBound", "defaultValue": -8, "value": -8, "type": "number", "options": {}}, {"displayName": "speed", "name": "speed", "defaultValue": 10, "value": 10, "type": "number", "options": {}}], "name": "bat"}, {"url": "control.js", "attributes": [{"displayName": "enabled", "name": "enabled", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "keyUp", "name": "keyUp", "defaultValue": "A", "value": "A", "type": "string", "options": {}}, {"displayName": "keyDown", "name": "keyDown", "defaultValue": "Z", "value": "Z", "type": "string", "options": {}}], "name": "input"}, {"url": "ai.js", "attributes": [{"displayName": "enabled", "name": "enabled", "defaultValue": false, "value": false, "type": "boolean", "options": {}}], "name": "ai"}]}}, "position": [-11, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 3, 1], "name": "Player2", "parent": "64f34ad9-74c7-44ec-b81f-8b2089036f09", "resource_id": "1a034516-6ded-4807-882a-5ad2830c0576", "labels": [], "enabled": true, "components": {"rigidbody": {"linearDamping": 0.0, "enabled": true, "friction": 0.5, "mass": 1.0, "angularDamping": 0.0, "linearFactor": [1.0, 1.0, 1.0], "type": "kinematic", "angularFactor": [1.0, 1.0, 1.0], "restitution": 1.0}, "collision": {"enabled": true, "halfExtents": [0.5, 1.5, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}, "script": {"enabled": true, "scripts": [{"url": "bat.js", "attributes": [{"displayName": "upperBound", "name": "upperBound", "defaultValue": 8, "value": 8, "type": "number", "options": {}}, {"displayName": "lowerBound", "name": "lowerBound", "defaultValue": -8, "value": -8, "type": "number", "options": {}}, {"displayName": "speed", "name": "speed", "defaultValue": 10, "value": 10, "type": "number", "options": {}}], "name": "bat"}, {"url": "control.js", "attributes": [{"displayName": "enabled", "name": "enabled", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "keyUp", "name": "keyUp", "defaultValue": "A", "value": "UP", "type": "string", "options": {}}, {"displayName": "keyDown", "name": "keyDown", "defaultValue": "Z", "value": "DOWN", "type": "string", "options": {}}], "name": "input"}, {"url": "ai.js", "attributes": [{"displayName": "enabled", "name": "enabled", "defaultValue": false, "value": true, "type": "boolean", "options": {}}], "name": "ai"}]}}, "position": [11, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Middle Line", "parent": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "resource_id": "b11724d3-4f95-4290-8202-e03ba7beff5e", "labels": [], "enabled": true, "components": {}, "position": [0, -9, 0], "rotation": [0, 0, 0], "children": [{"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "6c29649a-8126-461d-a26f-f8298127453d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 3, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "546c5792-59ec-4358-af3f-4fce6a7b8ecd", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 4, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "636fe4a8-291f-453d-b0e6-0bf25e70d05a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 15, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "4e91c9dc-4d9e-4dbf-b895-f57afb5941e9", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 5, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "a94cc6c7-8763-4697-a4b9-22ec2e2a626a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 11, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "3125f723-84e0-47aa-9d9e-d7ecdcb2f5c0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 9, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "823eff3f-cf85-40b2-9ae6-69263ab44ea2", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 16, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "84fb65d6-e64d-4d0b-921b-a9fc5b793038", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 10, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "631d4f42-05b9-4d9d-a863-bc7c8521f3de", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 17, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "20415245-caf4-46cb-8bb5-52012231b656", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 14, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "70cdb3e7-06fb-4ad5-ba26-e9a1c764bd97", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "fabd3fed-92dd-46c3-aeb3-70f87be871e4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 1, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "009bc641-25e9-4217-936a-0d187bdea8ef", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 13, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "3a892be5-5702-4b50-9330-6e6b117be2f0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 18, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "54d66dfb-aa0a-4c98-ad2f-eec2425ab507", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 2, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "df470ba4-75e5-4854-a83f-0e3fdbbccf72", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 12, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "e518d737-b3d0-42ce-89dd-7ec8898ce220", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 8, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "bdceba91-4664-41ee-9348-998b0398a467", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 7, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.5, 0.5, 0.5], "name": "Block", "parent": "b11724d3-4f95-4290-8202-e03ba7beff5e", "resource_id": "ee1d26ac-e79d-4c68-90bd-d7251b1fffa7", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, 6, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [30, 1, 1], "name": "Bottom", "parent": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "resource_id": "88fb3969-eeb7-4cd3-a9a0-6da568f5cf42", "labels": [], "enabled": true, "components": {"rigidbody": {"linearDamping": 0.0, "enabled": true, "friction": 0.0, "mass": 1.0, "angularDamping": 0.0, "linearFactor": [1.0, 1.0, 1.0], "type": "static", "angularFactor": [1.0, 1.0, 1.0], "restitution": 1.0}, "collision": {"enabled": true, "halfExtents": [15.0, 0.5, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}}, "position": [0, -10, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Goals", "parent": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "resource_id": "bd49fcbe-c95b-469d-8429-170255b9e62f", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Player1", "parent": "bd49fcbe-c95b-469d-8429-170255b9e62f", "resource_id": "5dce4fa1-7110-4b96-9ffb-d0e374d9543a", "labels": [], "enabled": true, "components": {"collision": {"enabled": true, "halfExtents": [0.5, 9.4, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "audiosource": {"activate": false, "assets": ["6449796c-4358-11e3-9c11-22000a219e93"], "enabled": true, "volume": 1.0, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": false, "3d": true}, "script": {"enabled": true, "scripts": [{"url": "goal.js", "attributes": [], "name": "goal"}]}}, "position": [-15, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Player2", "parent": "bd49fcbe-c95b-469d-8429-170255b9e62f", "resource_id": "51b64023-e149-46aa-8da4-827a7f444a25", "labels": [], "enabled": true, "components": {"collision": {"enabled": true, "halfExtents": [0.5, 9.4, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "audiosource": {"activate": false, "assets": ["6449796c-4358-11e3-9c11-22000a219e93"], "enabled": true, "volume": 1.0, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": false, "3d": true}, "script": {"enabled": true, "scripts": [{"url": "goal.js", "attributes": [], "name": "goal"}]}}, "position": [15, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Ball", "parent": "483eb6ee-1c1e-4106-b9ae-d483d3316796", "resource_id": "f968e74f-4852-4ee6-9066-b74a0683497f", "labels": [], "enabled": true, "components": {"rigidbody": {"linearDamping": 0.0, "enabled": true, "friction": 0.5, "mass": 1.0, "angularDamping": 0.0, "linearFactor": [1.0, 1.0, 0.0], "type": "dynamic", "angularFactor": [0.0, 0.0, 0.0], "restitution": 1.0}, "collision": {"enabled": true, "halfExtents": [0.5, 0.5, 0.5], "height": 2.0, "radius": 0.5, "asset": null, "type": "box", "axis": 1.0}, "model": {"materialAsset": "8f3c8daa-7c40-11e3-b69c-22000a219e93", "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "box"}, "audiosource": {"activate": false, "assets": ["e127842c-3e6e-11e3-b5ab-22000a219e93"], "enabled": true, "volume": 1.0, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": false, "3d": true}, "script": {"enabled": true, "scripts": [{"url": "ball.js", "attributes": [{"displayName": "speed", "name": "speed", "defaultValue": 10, "value": 10, "type": "number", "options": {}}], "name": "ball"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "UI", "parent": "c18714bb-fba7-436f-8fd8-9603f126ff10", "resource_id": "200e7e36-1cd6-4169-a77d-bd31bd8fe663", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ui.js", "attributes": [], "name": "ui"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Player2 Score", "parent": "200e7e36-1cd6-4169-a77d-bd31bd8fe663", "resource_id": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "asset"}}, "position": [5, 7, 0], "rotation": [0, 0, 0], "children": [{"scale": [50, 50, 50], "name": "2", "parent": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "resource_id": "b2c072c5-66ca-47d6-875e-168b21fd2122", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3e4e7c2e-3e78-11e3-bd17-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "3", "parent": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "resource_id": "e7696c82-8730-4a7f-a14d-c6974ebc9f95", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "2f2389b0-3e78-11e3-a6ac-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "5", "parent": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "resource_id": "379e7184-c821-457b-ae72-0d68507b0c15", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3e903358-3e78-11e3-af89-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "1", "parent": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "resource_id": "5ff9e70d-c5ce-4453-8c36-5dbfe3463faa", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "44c87852-3e78-11e3-a6ac-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "4", "parent": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "resource_id": "ff948631-43a0-4812-a8c9-5bc8c7eb9dd0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3f0e4b76-3e78-11e3-a7b6-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "0", "parent": "9cfd6447-7061-4f30-9273-3605de8b8a9a", "resource_id": "c0690aad-fb33-4074-97b0-2775606f80c1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3cc689d2-3e78-11e3-9806-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Player1 Score", "parent": "200e7e36-1cd6-4169-a77d-bd31bd8fe663", "resource_id": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "asset"}}, "position": [-7, 7, 0], "rotation": [0, 0, 0], "children": [{"scale": [50, 50, 50], "name": "2", "parent": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "resource_id": "080fe096-6339-4ca7-9945-79d792c38243", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3e4e7c2e-3e78-11e3-bd17-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "5", "parent": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "resource_id": "56b287e7-c99a-48a6-8d4d-4891fd275fd0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3e903358-3e78-11e3-af89-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "4", "parent": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "resource_id": "0b9c1f55-4df4-4426-b1e3-b727405bd621", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3f0e4b76-3e78-11e3-a7b6-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "1", "parent": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "resource_id": "5a3c8aee-2114-4513-bcb1-446937698fd1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "44c87852-3e78-11e3-a6ac-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "3", "parent": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "resource_id": "0ed7af80-b404-4136-9083-a159fb74ac13", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "2f2389b0-3e78-11e3-a6ac-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [50, 50, 50], "name": "0", "parent": "e323ad7d-f7de-42b4-9ada-22497d16d0b4", "resource_id": "f8b1a3dc-f94c-4f04-bf49-66f207ceddaa", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "3cc689d2-3e78-11e3-9806-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}], "template": null}], "template": null}],
                "labels": [],
                "position": [0, 0, 0],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "enabled": true,
                "components": {"pack": {}, "script": {"enabled": true, "scripts": [{"url": "tween.min.js", "attributes": [], "name": ""}, {"url": "tweenmanager.js", "attributes": [], "name": "tweenmanager"}]}}
            }
        }
    },
    "application_properties": {
        "resolution_mode": "AUTO",
        "fill_mode": "KEEP_ASPECT",
        "width": 960,
        "height": 640,
        "engine_version": "stable",
        "libraries": ["code.playcanvas.com/ammo.190ef03.js"]
    },
    toc: {
    "default": {
        "assets": {
            "2f2389b0-3e78-11e3-a6ac-22000a219e93": {
                "_id": "526c1d8eee980a0cea27de19", 
                "created_at": "2013-10-26T19:52:45.910000", 
                "data": {
                    "mapping": [
                        {
                            "material": "3494d5de-3e78-11e3-b5ab-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "ui_text_3.json", 
                    "hash": "62e5ac6e9e0eee5f1a39ae1b78038a59", 
                    "size": 42900, 
                    "url": "assets/will/pong/2f/2f2389b0-3e78-11e3-a6ac-22000a219e93/ui_text_3.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:52:45.910000", 
                "name": "ui_text_3", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "2f2389b0-3e78-11e3-a6ac-22000a219e93", 
                "source": false, 
                "source_asset_id": "2e821710-3e78-11e3-a6ac-22000a219e93", 
                "task": {}, 
                "type": "model", 
                "version": 3
            }, 
            "3494d5de-3e78-11e3-b5ab-22000a219e93": {
                "_id": "526c1d97ee980a0cb18f7b50", 
                "created_at": "2013-10-26T19:52:55.041000", 
                "data": {
                    "name": "lambert1", 
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 0, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
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
                            "name": "diffuseMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specularMapRotation", 
                            "type": "vec3"
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
                            "name": "glossMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissiveMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "opacityMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "normalMapRotation", 
                            "type": "vec3"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:52:55.041000", 
                "name": "lambert1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "3494d5de-3e78-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "2e821710-3e78-11e3-a6ac-22000a219e93", 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "3cc689d2-3e78-11e3-9806-22000a219e93": {
                "_id": "526c1da4ee980a0cea27de1f", 
                "created_at": "2013-10-26T19:53:08.788000", 
                "data": {
                    "mapping": [
                        {
                            "material": "3eaf3fdc-3e78-11e3-b5ab-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "ui_text_0.json", 
                    "hash": "5c1b80ccc6e4ddcb1d1652b0e615d87e", 
                    "size": 43084, 
                    "url": "assets/will/pong/3c/3cc689d2-3e78-11e3-9806-22000a219e93/ui_text_0.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:08.788000", 
                "name": "ui_text_0", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "3cc689d2-3e78-11e3-9806-22000a219e93", 
                "source": false, 
                "source_asset_id": "3be34370-3e78-11e3-9806-22000a219e93", 
                "task": {}, 
                "type": "model", 
                "version": 3
            }, 
            "3e4e7c2e-3e78-11e3-bd17-22000a219e93": {
                "_id": "526c1da7ee980a0cea27de23", 
                "created_at": "2013-10-26T19:53:11.357000", 
                "data": {
                    "mapping": [
                        {
                            "material": "49b97fc8-3e78-11e3-b5ab-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "ui_text_2.json", 
                    "hash": "08fd935427005c6847a1c00d7acae2c0", 
                    "size": 41636, 
                    "url": "assets/will/pong/3e/3e4e7c2e-3e78-11e3-bd17-22000a219e93/ui_text_2.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:11.357000", 
                "name": "ui_text_2", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "3e4e7c2e-3e78-11e3-bd17-22000a219e93", 
                "source": false, 
                "source_asset_id": "3d6a92de-3e78-11e3-bd17-22000a219e93", 
                "task": {}, 
                "type": "model", 
                "version": 3
            }, 
            "3e903358-3e78-11e3-af89-22000a219e93": {
                "_id": "526c1da7ee980a0cea27de24", 
                "created_at": "2013-10-26T19:53:11.788000", 
                "data": {
                    "mapping": [
                        {
                            "material": "4152c83a-3e78-11e3-b5ab-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "ui_text_5.json", 
                    "hash": "d8577464a7461d209ebffbc4686202a1", 
                    "size": 30769, 
                    "url": "assets/will/pong/3e/3e903358-3e78-11e3-af89-22000a219e93/ui_text_5.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:11.788000", 
                "name": "ui_text_5", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "3e903358-3e78-11e3-af89-22000a219e93", 
                "source": false, 
                "source_asset_id": "3da15292-3e78-11e3-af89-22000a219e93", 
                "task": {}, 
                "type": "model", 
                "version": 3
            }, 
            "3eaf3fdc-3e78-11e3-b5ab-22000a219e93": {
                "_id": "526c1da8ee980a0caf8f7b62", 
                "created_at": "2013-10-26T19:53:12.039000", 
                "data": {
                    "name": "lambert1", 
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 0, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
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
                            "name": "diffuseMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specularMapRotation", 
                            "type": "vec3"
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
                            "name": "glossMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissiveMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "opacityMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "normalMapRotation", 
                            "type": "vec3"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:12.039000", 
                "name": "lambert1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "3eaf3fdc-3e78-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "3be34370-3e78-11e3-9806-22000a219e93", 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "3f0e4b76-3e78-11e3-a7b6-22000a219e93": {
                "_id": "526c1da8ee980a0cea27de25", 
                "created_at": "2013-10-26T19:53:12.614000", 
                "data": {
                    "mapping": [
                        {
                            "material": "487d65f2-3e78-11e3-b5ab-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "ui_text_4.json", 
                    "hash": "255bbe449a766c5b92572379f18085c2", 
                    "size": 32473, 
                    "url": "assets/will/pong/3f/3f0e4b76-3e78-11e3-a7b6-22000a219e93/ui_text_4.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:12.614000", 
                "name": "ui_text_4", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "3f0e4b76-3e78-11e3-a7b6-22000a219e93", 
                "source": false, 
                "source_asset_id": "3e33ca64-3e78-11e3-a7b6-22000a219e93", 
                "task": {}, 
                "type": "model", 
                "version": 3
            }, 
            "4152c83a-3e78-11e3-b5ab-22000a219e93": {
                "_id": "526c1dacee980a0cb68f7b54", 
                "created_at": "2013-10-26T19:53:16.418000", 
                "data": {
                    "name": "lambert1", 
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 0, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
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
                            "name": "diffuseMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specularMapRotation", 
                            "type": "vec3"
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
                            "name": "glossMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissiveMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "opacityMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "normalMapRotation", 
                            "type": "vec3"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:16.418000", 
                "name": "lambert1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "4152c83a-3e78-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "3da15292-3e78-11e3-af89-22000a219e93", 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "44c87852-3e78-11e3-a6ac-22000a219e93": {
                "_id": "526c1db2ee980a0cea27de2b", 
                "created_at": "2013-10-26T19:53:22.223000", 
                "data": {
                    "mapping": [
                        {
                            "material": "460ea5b0-3e78-11e3-b5ab-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "ui_text_1.json", 
                    "hash": "47db336d5ae2c498bc27d78716f580da", 
                    "size": 17413, 
                    "url": "assets/will/pong/44/44c87852-3e78-11e3-a6ac-22000a219e93/ui_text_1.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:22.223000", 
                "name": "ui_text_1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "44c87852-3e78-11e3-a6ac-22000a219e93", 
                "source": false, 
                "source_asset_id": "448a6a12-3e78-11e3-a6ac-22000a219e93", 
                "task": {}, 
                "type": "model", 
                "version": 3
            }, 
            "460ea5b0-3e78-11e3-b5ab-22000a219e93": {
                "_id": "526c1db4ee980a0caf8f7b63", 
                "created_at": "2013-10-26T19:53:24.361000", 
                "data": {
                    "name": "lambert1", 
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 0, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
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
                            "name": "diffuseMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specularMapRotation", 
                            "type": "vec3"
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
                            "name": "glossMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissiveMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "opacityMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "normalMapRotation", 
                            "type": "vec3"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:24.361000", 
                "name": "lambert1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "460ea5b0-3e78-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "448a6a12-3e78-11e3-a6ac-22000a219e93", 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "487d65f2-3e78-11e3-b5ab-22000a219e93": {
                "_id": "526c1db8ee980a0cb58f7b65", 
                "created_at": "2013-10-26T19:53:28.442000", 
                "data": {
                    "name": "lambert1", 
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 0, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
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
                            "name": "diffuseMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specularMapRotation", 
                            "type": "vec3"
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
                            "name": "glossMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissiveMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "opacityMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "normalMapRotation", 
                            "type": "vec3"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:28.442000", 
                "name": "lambert1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "487d65f2-3e78-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "3e33ca64-3e78-11e3-a7b6-22000a219e93", 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "49b97fc8-3e78-11e3-b5ab-22000a219e93": {
                "_id": "526c1dbaee980a0cad8f7b5c", 
                "created_at": "2013-10-26T19:53:30.513000", 
                "data": {
                    "name": "lambert1", 
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specular", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 0, 
                            "name": "shininess", 
                            "type": "float"
                        }, 
                        {
                            "data": [
                                1, 
                                1, 
                                1
                            ], 
                            "name": "emissive", 
                            "type": "vec3"
                        }, 
                        {
                            "data": 1, 
                            "name": "opacity", 
                            "type": "float"
                        }, 
                        {
                            "data": null, 
                            "name": "diffuseMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "specularMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "glossMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "emissiveMap", 
                            "type": "texture"
                        }, 
                        {
                            "data": null, 
                            "name": "opacityMap", 
                            "type": "texture"
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
                            "name": "diffuseMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "specularMapRotation", 
                            "type": "vec3"
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
                            "name": "glossMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "emissiveMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "opacityMapRotation", 
                            "type": "vec3"
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
                            "data": [
                                0, 
                                0, 
                                0
                            ], 
                            "name": "normalMapRotation", 
                            "type": "vec3"
                        }
                    ], 
                    "shader": "phong"
                }, 
                "deleted": false, 
                "file": null, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T19:53:30.513000", 
                "name": "lambert1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "49b97fc8-3e78-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "3d6a92de-3e78-11e3-bd17-22000a219e93", 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "6449796c-4358-11e3-9c11-22000a219e93": {
                "_id": "52744bb3ee980a5829f2d851", 
                "created_at": "2013-11-02T00:47:46.996000", 
                "data": null, 
                "deleted": false, 
                "file": {
                    "filename": "goal.wav", 
                    "hash": "dd75b8aee76e6de4189bb7cce3969c03", 
                    "size": 74318, 
                    "url": "assets/will/pong/64/6449796c-4358-11e3-9c11-22000a219e93/goal.wav"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-11-02T00:47:46.996000", 
                "name": "goal", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "6449796c-4358-11e3-9c11-22000a219e93", 
                "source": false, 
                "source_asset_id": "61d78368-4358-11e3-8ade-22000a219e93", 
                "task": {}, 
                "type": "audio", 
                "version": 3
            }, 
            "8f3c8daa-7c40-11e3-b69c-22000a219e93": {
                "_id": "52d3c507ee980a2e4a9b1096", 
                "created_at": "2014-01-13T10:50:47.410000", 
                "data": {
                    "name": "Material 1", 
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
                                1, 
                                1, 
                                1
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
                "modified_at": "2014-01-18T04:35:09.638000", 
                "name": "Material 1", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "8f3c8daa-7c40-11e3-b69c-22000a219e93", 
                "source": false, 
                "source_asset_id": null, 
                "task": {}, 
                "type": "material", 
                "version": 3
            }, 
            "a6f9f43a-f339-11e3-87d9-22000a4a0339": {
                "_id": "539b5f8de559314af82a154c", 
                "created_at": "2014-06-13T20:31:09.132000", 
                "data": {
                    "mapping": [
                        {
                            "material": "8f3c8daa-7c40-11e3-b69c-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "pong.json", 
                    "hash": "3492cd1c06e73c74e4f1f4c22a30f9f0", 
                    "size": 152491, 
                    "url": "assets/will/pong/a6/a6f9f43a-f339-11e3-87d9-22000a4a0339/pong.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-13T20:32:16.030000", 
                "name": "pong", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "a6f9f43a-f339-11e3-87d9-22000a4a0339", 
                "source": false, 
                "source_asset_id": "a5c8f2f0-f339-11e3-93d5-22000a4a0339", 
                "task": null, 
                "type": "model", 
                "version": 3
            }, 
            "a80cd46a-f356-11e3-87d9-22000a4a0339": {
                "_id": "539b9036e559314af82a157f", 
                "created_at": "2014-06-13T23:58:46.339000", 
                "data": {
                    "mapping": [
                        {
                            "material": "8f3c8daa-7c40-11e3-b69c-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "2player.json", 
                    "hash": "c9499a6e3f506af80e8ba148119a49b4", 
                    "size": 257549, 
                    "url": "assets/will/pong/a8/a80cd46a-f356-11e3-87d9-22000a4a0339/2player.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-14T00:01:16.933000", 
                "name": "2player", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "a80cd46a-f356-11e3-87d9-22000a4a0339", 
                "source": false, 
                "source_asset_id": "a59672ae-f356-11e3-8e26-22000a4a0339", 
                "task": null, 
                "type": "model", 
                "version": 3
            }, 
            "a8117c2c-f356-11e3-87d9-22000a4a0339": {
                "_id": "539b9036e559314af92a154f", 
                "created_at": "2014-06-13T23:58:46.369000", 
                "data": {
                    "mapping": [
                        {
                            "material": "8f3c8daa-7c40-11e3-b69c-22000a219e93"
                        }
                    ]
                }, 
                "deleted": false, 
                "file": {
                    "filename": "1player.json", 
                    "hash": "fb31501c4355a80b8c0d7ade38647778", 
                    "size": 222914, 
                    "url": "assets/will/pong/a8/a8117c2c-f356-11e3-87d9-22000a4a0339/1player.json"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2014-06-14T00:01:07.615000", 
                "name": "1player", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "a8117c2c-f356-11e3-87d9-22000a4a0339", 
                "source": false, 
                "source_asset_id": "a58f0e6a-f356-11e3-a006-22000a4a0339", 
                "task": null, 
                "type": "model", 
                "version": 3
            }, 
            "e127842c-3e6e-11e3-b5ab-22000a219e93": {
                "_id": "526c0df1ee980a0cb58f7b64", 
                "created_at": "2013-10-26T18:46:09.603000", 
                "data": null, 
                "deleted": false, 
                "file": {
                    "filename": "beep.wav", 
                    "hash": "69903a0b655167a05ae3fefd65eaeb54", 
                    "size": 13048, 
                    "url": "assets/will/pong/e1/e127842c-3e6e-11e3-b5ab-22000a219e93/beep.wav"
                }, 
                "has_thumbnail": false, 
                "modified_at": "2013-10-26T18:46:09.603000", 
                "name": "beep", 
                "owner_id": 8, 
                "project_id": 851, 
                "resource_id": "e127842c-3e6e-11e3-b5ab-22000a219e93", 
                "source": false, 
                "source_asset_id": "e0426d2e-3e6e-11e3-af89-22000a219e93", 
                "task": {}, 
                "type": "audio", 
                "version": 3
            }
        }, 
        "packs": [
            "82d91e12-4a83-4a4c-846e-719d9759769b"
        ]
    }
}
};
pc.content = new pc.fw.ContentFile(content);