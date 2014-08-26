pc.script.create('minimap', function (context) {
    var Minimap = function (entity) {
        this.entity = entity;
        
        this.width = 128;
        this.height = 128;
        
        this.canvas = this.prepareCanvas();
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
        document.body.style.overflow = 'hidden';
        
        this.ctx = this.canvas.getContext('2d');
    };

    Minimap.prototype = {
        prepareCanvas: function() {
            var canvas = document.createElement('canvas');
            canvas.className = 'minimap';
            canvas.style.display = 'block';
            canvas.style.position = 'absolute';
            canvas.style.top = '16px';
            canvas.style.right = '16px';
            canvas.style.backgroundColor = 'rgba(0, 0, 0, .7)';
            canvas.style.border = '4px solid #111';
            return canvas;
        },
        
        initialize: function () {
            this.bullets = context.root.findByName('bullets');
            this.tanks = context.root.findByName('tanks');
            this.client = context.root.getChildren()[0].script.client;
        },
        
        draw: function() {
            var ctx = this.ctx;
            var clr, i, pos;
            
            ctx.clearRect(0, 0, 128, 128);
            
            // bullets
            ctx.beginPath();
            var bullets = this.bullets.getChildren();
            i = bullets.length;
            while(i--) {
                pos = bullets[i].getPosition();
                pos.x = pos.x / 64 * this.width + (this.width / 2);
                pos.z = pos.z / 64 * this.height + (this.height / 2);
                
                ctx.rect(pos.x - 0.5, pos.z - 0.5, 1, 1);
            }
            ctx.fillStyle = 'rgba(255, 255, 255, .3)';
            ctx.fill();
            
            // tanks
            var tanks = this.tanks.getChildren();
            i = tanks.length;
            while(i--) {
                pos = tanks[i].getPosition();
                pos.x = pos.x / 64 * this.width + (this.width / 2);
                pos.z = pos.z / 64 * this.height + (this.height / 2);
                
                if (tanks[i].getName() == 'tank_' + this.client.id) {
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.z, 4, 0, Math.PI * 2, false);
                    ctx.strokeStyle = 'rgba(128, 255, 128, 0.2)';
                    ctx.stroke();
                }
                
                ctx.beginPath();
                ctx.rect(pos.x - 1, pos.z - 1, 2, 2);
                clr = tanks[i].script.tank.material.diffuse;
                ctx.fillStyle = '#' + ('00' + Math.floor(clr.r * 255).toString(16)).slice(-2) + ('00' + Math.floor(clr.g * 255).toString(16)).slice(-2) + ('00' + Math.floor(clr.b * 255).toString(16)).slice(-2);
                ctx.fill();
            }
        }
    };

    return Minimap;
});