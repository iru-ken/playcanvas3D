pc.script.attribute('startTime', 'number', 0);
pc.script.attribute('duration', 'number', 1);
pc.script.attribute('startPos', 'vector', [0, 0, 0]);
pc.script.attribute('endPos', 'vector', [0, 0, 0]);
pc.script.attribute('startScale', 'vector', [1, 1, 1]);
pc.script.attribute('endScale', 'vector', [1, 1, 1]);
pc.script.attribute('easing', 'enumeration', 1, {
    enumerations: [{
       name: 'Linear',
       value: 0
    }, {
       name: 'Quadratic',
       value: 1
    }, {
       name: 'Cubic',
       value: 2
    }, {
       name: 'Quartic',
       value: 3
    }, {
       name: 'Quintic',
       value: 4
    }, {
       name: 'Sinusoidal',
       value: 5
    }, {
       name: 'Exponential',
       value: 6
    }, {
       name: 'Circular',
       value: 7
    }, {
       name: 'Elastic',
       value: 8
    }, {
       name: 'Back',
       value: 9
    }, {
       name: 'Bounce',
       value: 10
    }]
});
pc.script.attribute('inOut', 'enumeration', 0, {
    enumerations: [{
       name: 'In',
       value: 0
    }, {
       name: 'Out',
       value: 1
    }, {
       name: 'InOut',
       value: 2
    }]
});

pc.script.create('tween', function (context) {
    var easingFuncs = [
        [TWEEN.Easing.Linear.In, TWEEN.Easing.Linear.Out, TWEEN.Easing.Linear.InOut],
        [TWEEN.Easing.Quadratic.In, TWEEN.Easing.Quadratic.Out, TWEEN.Easing.Quadratic.InOut],
        [TWEEN.Easing.Cubic.In, TWEEN.Easing.Cubic.Out, TWEEN.Easing.Cubic.InOut],
        [TWEEN.Easing.Quartic.In, TWEEN.Easing.Quartic.Out, TWEEN.Easing.Quartic.InOut],
        [TWEEN.Easing.Quintic.In, TWEEN.Easing.Quintic.Out, TWEEN.Easing.Quintic.InOut],
        [TWEEN.Easing.Sinusoidal.In, TWEEN.Easing.Sinusoidal.Out, TWEEN.Easing.Sinusoidal.InOut],
        [TWEEN.Easing.Exponential.In, TWEEN.Easing.Exponential.Out, TWEEN.Easing.Exponential.InOut],
        [TWEEN.Easing.Circular.In, TWEEN.Easing.Circular.Out, TWEEN.Easing.Circular.InOut],
        [TWEEN.Easing.Elastic.In, TWEEN.Easing.Elastic.Out, TWEEN.Easing.Elastic.InOut],
        [TWEEN.Easing.Back.In, TWEEN.Easing.Back.Out, TWEEN.Easing.Back.InOut],
        [TWEEN.Easing.Bounce.In, TWEEN.Easing.Bounce.Out, TWEEN.Easing.Bounce.InOut]
    ];
    
    // Creates a new Tween instance
    var Tween = function (entity) {
        this.entity = entity;
    };

    Tween.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.timer = this.startTime;
            this.createTween();
            this.entity.model.enabled = false;
        },

        createTween: function () {
            var e = this.entity;
            this.started = false;
            this.timer = this.startTime;
            this.tween = new TWEEN.Tween( { px: this.startPos[0], py: this.startPos[1], pz: this.startPos[2], 
                                            sx: this.startScale[0], sy: this.startScale[1], sz: this.startScale[2] } )
                .to( { px: this.endPos[0], py: this.endPos[1], pz: this.endPos[2], 
                       sx: this.endScale[0], sy: this.endScale[1], sz: this.endScale[2] }, Math.floor(this.duration * 1000) )
                .easing(easingFuncs[this.easing][this.inOut])
                .onUpdate( function () {
                    e.setPosition(this.px, this.py, this.pz);
                    e.setLocalScale(this.sx, this.sy, this.sz);
                });
        },

        onAttributeChanged: function (name, oldValue, newValue) {
            this.createTween();
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.timer -= dt;
            if ((this.timer <= 0) && !this.started) {
                this.entity.model.enabled = true;
                this.tween.start();
                this.started = true;
            }
        }
    };

    return Tween;
});