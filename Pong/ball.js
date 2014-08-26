pc.script.attribute('speed', 'number', 10);

pc.script.create('ball', function (context) {
    var Ball = function (entity) {
        this.entity = entity;
    };

    Ball.prototype = {
        initialize: function () {
            this.velocity = new pc.Vec3();

            this.entity.collision.on('collisionstart', this.onHit, this);

            setTimeout(function () {
                this.reset();
            }.bind(this), 2000);
        },

        onHit: function (result) {
            var entity = this.entity;
            this.bounceTween = new TWEEN.Tween( { x: 1.5, y: 0 } )
                .to( { x: 1 }, 1000 )
                .easing( TWEEN.Easing.Elastic.Out )
                .onUpdate( function () {
                    entity.setLocalScale(this.x, this.x, this.x);
                } ).start();

            this.entity.audiosource.play('beep');
        },

        reset: function () {
            this.entity.setPosition(0, 0, 0);
            this.entity.rigidbody.syncEntityToBody();

            var r = Math.random();
            this.velocity.set(r > 0.5 ? -1 : 1, r - 0.5, 0).normalize().scale(this.speed);
            this.entity.rigidbody.linearVelocity = this.velocity;
        },

        update: function (dt) {
            var currentVelocity = this.entity.rigidbody.linearVelocity;
            if (currentVelocity.length() > 0) {
                this.velocity.copy(currentVelocity).normalize().scale(this.speed);
                this.velocity.lerp(currentVelocity, this.velocity, 0.1);
                this.entity.rigidbody.linearVelocity = this.velocity;
            }
        }
    };

    return Ball;
});