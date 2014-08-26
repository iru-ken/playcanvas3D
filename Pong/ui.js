pc.script.create('ui', function (context) {
    // Creates a new Ui instance
    var Ui = function (entity) {
        this.entity = entity;
    };

    Ui.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            var p1 = this.entity.findByName('Player1 Score');
            var p2 = this.entity.findByName('Player2 Score');
            this.p1 = [];
            this.p2 = [];
            for (var i = 0; i <= 5; i++) {
                this.p1.push(p1.findByName('' + i));
                this.p2.push(p2.findByName('' + i));
            }

            this.score = {};
            this.reset();
        },

        reset: function () {
            this.score['Player1'] = 0;
            this.score['Player2'] = 0;
            this.updateScore();
        },

        incrementScore: function (goalOwner) {
            var playedThatScored = (goalOwner === 'Player1') ? 'Player2' : 'Player1';
            this.score[playedThatScored]++;
            this.updateScore();

            if (this.score[playedThatScored] === 5) {
                setTimeout(function () {
                    var ballEntity = context.root.findByName('Ball');
                    ballEntity.script.ball.reset();
                    
                    this.reset();
                }.bind(this), 2000);
            }
        },
        
        updateScore: function () {
            for (var i = 0; i <= 5; i++) {
                this.p1[i].enabled = (i === this.score['Player1']);
                this.p2[i].enabled = (i === this.score['Player2']);
            }
        }
    };

    return Ui;
});