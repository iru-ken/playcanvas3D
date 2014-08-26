module('pc.fw.PickComponent', {
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
    jack(function () {
        var hc = new pc.fw.PickComponentSystem(context);
        
        ok(hc);
        ok(context.systems.pick);        
    });
});

test("createComponent", function () {
    var hc = new pc.fw.PickComponentSystem(context);
    var en = new pc.fw.Entity();
    var data = hc.createComponent(en);    
    ok(data);
});
