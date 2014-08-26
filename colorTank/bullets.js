pc.script.create('bullets', function (context) {
    var Bullets = function (entity) {
        this.entity = entity;
    };

    Bullets.prototype = {
        initialize: function () {
            this.tanks = context.root.findByName('tanks');
            this.bullet = context.root.findByName('bullet');
            this.bullet.enabled = false;
            
            this.bullets = context.root.findByName('bullets');
        },

        new: function(data) {
            var tank = this.tanks.findByName('tank_' + data[1]);
            if (! tank) return;
            
            var bullet = this.bullet.clone();
            bullet.setName('bullet_' + data[0]);
            bullet.enabled = true;
            bullet.setPosition(tank.getPosition().x, 0.65, tank.getPosition().z);
            bullet.targetPosition = new pc.Vec3(data[4], 0.65, data[5]);
            bullet.speed = data[6] * 50 * 0.5;
            bullet.model.material = tank.script.tank.material;
            
            this.bullets.addChild(bullet);
        },
        
        delete: function(id) {
            var bullet = this.bullets.findByName('bullet_' + id);
            if (! bullet) return;
            
            bullet.destroy();
        }
    };

    return Bullets;
});