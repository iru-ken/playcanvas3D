pc.script.attribute('enabled', 'boolean', true);
pc.script.attribute('keyUp', 'string', 'A');
pc.script.attribute('keyDown', 'string', 'Z');

pc.script.create('control', function (context) {
    // Creates a new Input instance
    var Input = function (entity) {
        this.entity = entity;

        this.touch = {
            id: -1,
            y: 0
        };
        
        this.enabled = false;
    };

    Input.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            // Listen for touch events
            var canvas = context.graphicsDevice.canvas;
            canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
            canvas.addEventListener("touchmove", this.touchMove.bind(this), false);
            canvas.addEventListener("touchend", this.touchEnd.bind(this), false);
        },

        touchStart: function (e) {
            e.preventDefault();

            var c = context.graphicsDevice.canvas;
            var w = (navigator.isCocoonJS) ? c.width / window.devicePixelRatio : parseInt(c.style.width, 10);
            for (var i = 0; i < e.changedTouches.length; i++) {
                var touch = e.changedTouches[i];
                if ((this.touch.id === -1) && (touch.clientX < w / 2)) {
                    this.touch.id = touch.identifier;
                    this.touch.y = touch.clientY - c.getBoundingClientRect().top;
                }
            }            
        },

        touchMove: function (e) {
            e.preventDefault();

            var c = context.graphicsDevice.canvas;
            for (var i = 0; i < e.changedTouches.length; i++) {
                var touch = e.changedTouches[i];
                if (this.touch.id === touch.identifier) {
                    this.touch.y = touch.clientY - c.getBoundingClientRect().top;
                }
            }            
        },

        touchEnd: function (e) {
            e.preventDefault();

            for (var i = 0; i < e.changedTouches.length; i++) {
                var touch = e.changedTouches[i];
                if (this.touch.id === touch.identifier) {
                    this.touch.id = -1;
                }
            }            
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (this.enabled) {
                // Handle touch events
                var c = context.graphicsDevice.canvas;
                var h = (navigator.isCocoonJS) ? c.height / window.devicePixelRatio : parseInt(c.style.height, 10);
                if (this.touch.id !== -1) {
                    this.entity.script.bat.moveTo(1 - this.touch.y / h, dt);
                }
    
                // Handle key events
                if (context.keyboard.isPressed(pc.input['KEY_' + this.keyUp])) {
                    this.entity.script.bat.moveTo(1, dt);
                }
                if (context.keyboard.isPressed(pc.input['KEY_' + this.keyDown])) {
                    this.entity.script.bat.moveTo(0, dt);
                }
            }
        }
    };

    return Input;
});