var tmpVec = new pc.Vec3();

pc.script.create('bullet', function (context) {
    var Bullet = function (entity) {
        this.entity = entity;
    };

    Bullet.prototype = {
        initialize: function () { },

        update: function (dt) {
            tmpVec.copy(this.entity.targetPosition).sub(this.entity.getPosition()).normalize().scale(this.entity.speed * dt);
            this.entity.setPosition(tmpVec.add(this.entity.getPosition()));
            
            if (tmpVec.copy(this.entity.targetPosition).sub(this.entity.getPosition()).length() < this.entity.speed * dt * 1.5 ||
                Math.abs(this.entity.getPosition().x) > 32 ||
                Math.abs(this.entity.getPosition().z) > 32) {
                    
                this.entity.destroy();
            }
        }
    };

    return Bullet;
});