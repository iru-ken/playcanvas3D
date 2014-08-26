pc.script.create('introscreen', function (context) {
    // Creates a new Introscreen instance
    var IntroScreen = function (entity) {
        this.entity = entity;
    };

    IntroScreen.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);
        },

        onMouseDown: function (e) {
            var camera = context.root.findByName('Camera');
            var onePlayer = context.root.findByName('1 Player');
            var twoPlayer = context.root.findByName('2 Player');
            
            var from = camera.camera.screenToWorld(e.x, e.y, camera.camera.nearClip);
            var to = camera.camera.screenToWorld(e.x, e.y, camera.camera.farClip);

            context.systems.rigidbody.raycastFirst(from, to, function (result) {
                var bats, p2;
                var pickedEntity = result.entity;
                if (result.entity === onePlayer) {
                    bats = context.root.findByName('Bats');
                    p2 = bats.findByName('Player2');
                    p2.script.control.enabled = false;
                    p2.script.ai.enabled = true;
                    this.playGame();
                } else if (result.entity === twoPlayer) {
                    bats = context.root.findByName('Bats');
                    p2 = bats.findByName('Player2');
                    p2.script.control.enabled = true;
                    p2.script.ai.enabled = false;
                    this.playGame();
                }
            }.bind(this));
        },
        
        playGame: function () {
            this.entity.enabled = false;
            context.root.findByName('Game').enabled = true;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (context.keyboard.wasPressed(pc.input.KEY_SPACE)) {
                this.playGame();
            }
        }
    };

    return IntroScreen;
});