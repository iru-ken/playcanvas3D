var tmpVec = new pc.Vec3();
var tmpQuat = new pc.Quat();

pc.script.create('tank', function (context) {
    var Tank = function (entity) {
        this.entity = entity;
        this.entity.angle = this.angle.bind(this);
        this.entity.targeting = this.targeting.bind(this);
        this.entity.setColor = this.setColor.bind(this);
        
        this.movePoint = new pc.Vec3();
        this.targetPoint = new pc.Quat();
        
        this.material = null;
        this.head = null;
        this.hpBar = null;
    };

    Tank.prototype = {
        initialize: function () {
            // find head
            this.head = this.entity.findByName('head');
            
            // find hpBar
            this.hpBar = this.head.findByName('hp');
            this.hpBarLeft = this.hpBar.findByName('left');
            this.hpBarRight = this.hpBar.findByName('right');
            
            // find light
            this.light = this.entity.findByName('light');
            
            // clone material
            this.material = this.entity.findByName('body').model.material.clone();
            
            // put new material on each sub-part
            this.entity.findByLabel('sub-part').forEach(function(entity) {
                entity.model.material = this.material;
            }.bind(this));
            
            // set white color for material
            this.material.diffuse.set(0, 0, 0, 1);
            this.material.update();
            
            this.entity.fire('ready');
            
            this.movePoint.copy(this.entity.getPosition());
            
            this.respawned = Date.now();
            this.flashState = false;
        },

        update: function (dt) {
            // rotation
            tmpVec.copy(this.entity.getPosition());
            if (tmpVec.sub(this.movePoint).length() > 0.2) {
                var angle = Math.floor(Math.atan2(this.entity.getPosition().x - this.movePoint.x, this.entity.getPosition().z - this.movePoint.z) / (Math.PI / 180));
                tmpQuat.setFromEulerAngles(0, angle + 180, 0);
                tmpQuat.slerp(this.entity.getRotation(), tmpQuat, 0.15);
                this.entity.setRotation(tmpQuat);
            }
            
            // movement
            tmpVec.lerp(this.entity.getPosition(), this.movePoint, 0.1);
            this.entity.setPosition(tmpVec);
            
            // targeting
            tmpQuat.slerp(this.head.getRotation(), this.targetPoint, 0.3);
            this.head.setRotation(tmpQuat);
            
            // hp bar
            this.hpBar.setRotation(0, 0, 0, 1);
            
            if (Date.now() - this.respawned < 1000) {
                var state = (Math.floor((Date.now() - this.respawned) / 100) % 2) == 1;
                if (this.flashState !== state) {
                    this.flashState = state;
                    
                    this.entity.findByLabel('sub-part').forEach(function(entity) {
                        entity.model.enabled = state;
                    });
                }
            } else if (! this.flashState) {
                this.flashState = true;
                
                this.entity.findByLabel('sub-part').forEach(function(entity) {
                    entity.model.enabled = true;
                });
            }
        },
        
        setColor: function(color) {
            if (this.material.diffuse.r !== color[0] || this.material.diffuse.g !== color[1] || this.material.diffuse.b !== color[2]) {
                this.material.diffuse.set(color[0], color[1], color[2], 1);
                this.material.update();
                
                if (this.light.enabled) {
                    this.light.light.color.set(color[0], color[1], color[2], 1);
                    this.light.light.refreshProperties();
                }
            }
        },
        
        setHP: function(hp) {
            var left = Math.min(10, hp / 10);
            this.hpBarLeft.setLocalScale(left, 0.1, 0.1);
            this.hpBarLeft.setLocalPosition(-(1 - left) / 2, 0, 0);
            this.hpBarRight.setLocalScale(1 - left, 0.1, 0.1);
            this.hpBarRight.setLocalPosition(left / 2, 0, 0);
        },
        
        angle: function(angle) {
            this.entity.setRotation(this.entity.getRotation().setFromEulerAngles(0, angle, 0));
        },
        
        targeting: function(angle) {
            this.targetPoint.setFromEulerAngles(0, angle, 0);
        },
        
        moveTo: function(pos) {
            this.movePoint.set(pos[0], 0, pos[1]);
        }
    };

    return Tank;
});