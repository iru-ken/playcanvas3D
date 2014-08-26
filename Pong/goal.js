pc.script.create('goal', function (context) {
    // Creates a new Goal instance
    var Goal = function (entity) {
        this.entity = entity;
    };

    Goal.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('triggerenter', this.onGoal, this);
        },
        
        onGoal: function (ball) {
            var uiEntity = context.root.findByName('UI');
            uiEntity.script.ui.incrementScore(this.entity.getName());

            this.entity.audiosource.play('goal');
            setTimeout(function () {
                var ballEntity = context.root.findByName('Ball');
                ballEntity.script.ball.reset();
            }, 2000);
        }
    };

    return Goal;
});