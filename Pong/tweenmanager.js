pc.script.create('tweenmanager', function (context) {
    // Creates a new Tweenmanager instance
    var Tweenmanager = function (entity) {
        this.entity = entity;
    };

    Tweenmanager.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            TWEEN.update();
        }
    };

    return Tweenmanager;
});