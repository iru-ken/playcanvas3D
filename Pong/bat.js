pc.script.attribute('upperBound', 'number', 8);
pc.script.attribute('lowerBound', 'number', -8);
pc.script.attribute('speed', 'number', 10);

pc.script.create('bat', function (context) {

    var Bat = function (entity) {
        this.entity = entity;
    };

    Bat.prototype = {
        moveTo: function (targetPos, timeStep) {
            var currPos = this.entity.getPosition();
            var currY = currPos.y;
            var targetY = this.lowerBound + targetPos * (this.upperBound - this.lowerBound);

            var step = timeStep * this.speed;
            if (targetY < currY) step = -step;

            var newY = currY + step;

            if (((currY <= targetY) && (newY >= targetY)) ||
                ((currY >= targetY) && (newY <= targetY))) {
                newY = targetY;
            }

            this.entity.setPosition(currPos.x, newY, currPos.z);
        }
    };

    return Bat;
});