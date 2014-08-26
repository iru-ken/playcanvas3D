module('pc.fw.AudioListenerComponent', {
    setup: function () {
        var scene = {};
        var registry = new pc.fw.ComponentSystemRegistry();
        var loader = new pc.resources.ResourceLoader();
        var device = {};
        context = new pc.fw.ApplicationContext(loader, scene, device, registry, {});
    },
    teardown: function () {
        delete context;
    }
});

test("new", function () {
    var hc = new pc.fw.AudioListenerComponentSystem(context);
    
    ok(hc);
    ok(context.systems.audiolistener);
});

