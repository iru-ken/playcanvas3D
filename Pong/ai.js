pc.script.attribute('enabled', 'boolean', false);

pc.script.create('ai', function (context) {
    // Creates a new Ai instance
    var AI = function (entity) {
        this.entity = entity;
    };

    AI.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.ball = context.root.findByName('Ball');
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (this.enabled) {
                var batY = this.entity.getPosition().y;
                var ballY = this.ball.getPosition().y;
                
                var courtHeight = this.entity.script.bat.upperBound - this.entity.script.bat.lowerBound;
                var normalized = (ballY + courtHeight * 0.5) / courtHeight;
                
                this.entity.script.bat.moveTo(normalized, dt);
            }
        }
    };

    return AI;
});