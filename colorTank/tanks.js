pc.script.create('tanks', function (context) {
    var Tanks = function (entity) {
        this.entity = entity;
        this.ind = 0;
    };

    Tanks.prototype = {
        initialize: function () {
            this.tank = context.root.findByName('tank');
            this.tank.enabled = false;
            
            this.tanks = context.root.findByName('tanks');
            this.client = context.root.getChildren()[0].script.client;
            this.camera = context.root.findByName('camera');
            this.minimap = context.root.getChildren()[0].script.minimap;
        },
        
        new: function(args) {
            var newTank = this.tank.clone();
            newTank.setName('tank_' + args.id);
            newTank.enabled = true;
            newTank.setPosition(args.pos[0], 0, args.pos[1]);
            newTank.rotate(0, Math.random() * 360, 0);
            
            
            if (args.id == this.client.id) {
                this.camera.script.link.link = newTank;
            }
            
            this.tanks.addChild(newTank);
            
            var self = this;
            newTank.on('ready', function() {
                this.setColor(args.color);
                this.angle(args.angle);
                
                if (self.client.id == args.id) {
                    this.script.tank.light.enabled = true;
                }
            });
        },
        
        delete: function(args) {
            var tank = this.tanks.findByName('tank_' + args.id);
            if (! tank) return;
            
            tank.destroy();
        },
        
        respawn: function(id) {
            var tank = this.tanks.findByName('tank_' + id);
            if (! tank) return;
            
            tank.script.tank.respawned = Date.now();
            tank.setPosition(tank.script.tank.movePoint);
        },
        
        updateData: function(data) {
            for(var id in data) {
                var tank = this.tanks.findByName('tank_' + id);
                if (! tank) continue;
                
                tank.script.tank.moveTo(data[id]);
                if (id != this.client.id) {
                    tank.script.tank.targeting(data[id][2]);
                }
                
                if (data[id][3]) {
                    tank.script.tank.setColor(data[id][3]);
                }
                
                tank.script.tank.setHP(data[id][4]);
            }
            
            this.minimap.draw();
        }
    };

    return Tanks;
});