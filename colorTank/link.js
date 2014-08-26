var tmpVec = new pc.Vec3();

pc.script.create('link', function (context) {
    var Link = function (entity) {
        this.entity = entity;
        this.entity.link = this.link.bind(this);
        this.link = null;
        this.vec = new pc.Vec2();
        this.angle = 0;
        this.lastAngle = 0;
        this.lastSend = 0;
        this.mPos = new pc.Vec2();
    };

    Link.prototype = {
        initialize: function () {
            context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
            this.client = context.root.getChildren()[0].script.client;
        },

        update: function (dt) {
            if (this.link) {
                tmpVec.set(
                    this.link.getPosition().x + (this.mPos.x / (context.graphicsDevice.width / 2) * 4),
                    16,
                    this.link.getPosition().z + 9 + (this.mPos.y / (context.graphicsDevice.height / 2) * 4)
                )
                this.entity.setPosition(tmpVec.lerp(this.entity.getPosition(), tmpVec, 0.1));
            }
            
            if (Date.now() - this.lastSend > 100 && this.angle !== this.lastAngle) {
                this.lastSend = Date.now();
                this.lastAngle = this.angle;
                
                this.client.socket.send('target', this.angle);
            }
        },
        
        onMouseMove: function(evt) {
            if (this.link) {
                this.mPos.set(evt.x - (context.graphicsDevice.width / 2), evt.y - (context.graphicsDevice.height / 2));
                this.vec.copy(this.mPos).normalize();
                this.angle = Math.floor(Math.atan2(this.vec.x, this.vec.y) / (Math.PI / 180));
                this.link.targeting(this.angle);
            }
        },
        
        link: function(tank) {
            this.link = tank;
        }
    };

    return Link;
});