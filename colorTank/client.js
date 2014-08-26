pc.script.create('client', function (context) {

    var Client = function (entity) {
        this.entity = entity;
        this.id = null;
        this.movement = [ 0, 0 ];
        
        this.points = 0;
    };

    Client.prototype = {
        initialize: function () {
            this.tanks = context.root.getChildren()[0].script.tanks;
            this.bullets = context.root.getChildren()[0].script.bullets;
            
            var self = this;
            var socket = this.socket = new m.net.ws({ url: 'ws://tanks.moka.co/' });

            socket.on('init', function(data) {
                self.id = data.id;
            });
            
            socket.on('tank.new', function(data) {
                self.tanks.new(data);
            });
            
            socket.on('tank.delete', function(data) {
                self.tanks.delete(data);
            });
            
            socket.on('update', function(data) {
                self.tanks.updateData(data.tanks);
                
                var i = 0;
                
                if (data.tanksRespawn) {
                    i = data.tanksRespawn.length;
                    while(i--) {
                        self.tanks.respawn(data.tanksRespawn[i]);
                    }
                }
                
                if (data.bulletsDelete) {
                    i = data.bulletsDelete.length;
                    while(i--) {
                        self.bullets.delete(data.bulletsDelete);
                    }
                }
            });
            
            socket.on('bullet.new', function(data) {
                self.bullets.new(data);
            });
            
            socket.on('point', function(points) {
                self.points += points;
                var element = document.getElementById('points');
                if (element) {
                    element.textContent = self.points;
                }
            });
            
            context.mouse.on('mousedown', this.onMouseDown, this);
            context.mouse.on('mouseup', this.onMouseUp, this);
            
            this.mouseState = false;
        },

        update: function (dt) {
            // collect keyboard input
            var movement = [
                context.keyboard.isPressed(pc.input.KEY_D) - context.keyboard.isPressed(pc.input.KEY_A),
                context.keyboard.isPressed(pc.input.KEY_S) - context.keyboard.isPressed(pc.input.KEY_W)
            ];
            
            // check if it is changed
            if (movement[0] !== this.movement[0] || movement[1] != this.movement[1]) {
                this.movement = movement;
                
                this.socket.send('move', this.movement);
            }
        },
        
        onMouseDown: function() {
            this.shoot(true);
        },
        
        onMouseUp: function() {
            this.shoot(false);
        },
        
        shoot: function(state) {
            if (this.shootingState !== state) {
                this.shootingState = state;
                
                this.socket.send('shoot', this.shootingState);
            }
        }
    };

    return Client;
});