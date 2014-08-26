pc.extend(pc.fw, function () {
    /**
     * @private
     * @name pc.fw.CollisionCircleComponent
     * @constructor Create a new CollisionCircleComponent
     * @class 
     * @param {Object} context
     * @extends pc.fw.Component
     */
    var CollisionCircleComponent = function CollisionCircleComponent () {
        this.on('set_density', this.onSetDensity, this);
        this.on('set_friction', this.onSetFriction, this);
        this.on('set_restitution', this.onSetRestitution, this);
        this.on('set_radius', this.onSetRadius, this);
    };
    CollisionCircleComponent = pc.inherits(CollisionCircleComponent, pc.fw.Component);
    
    pc.extend(CollisionCircleComponent.prototype, {
        onSetDensity: function (name, oldValue, newValue) {
            if (!this.entity.body2d) {
                return;
            }

            var body = this.entity.body2d.body;
            if (body) {
                // We only support a single fixture at the moment
                var fixture = body.GetFixtureList();
                fixture.SetDensity(newValue);

                // Update the body with changes
                body.ResetMassData();
            }                
        },

        onSetFriction: function (name, oldValue, newValue) {
            if (!this.entity.body2d) {
                return;
            }

            var body = this.entity.body2d.body;
            if (body) {
                // We only support a single fixture at the moment
                var fixture = body.GetFixtureList();
                fixture.SetFriction(newValue);

                // Update the body with changes
                body.ResetMassData();
            }                
        },

        onSetRestitution: function (name, oldValue, newValue) {
            if (!this.entity.body2d) {
                return;
            }

            var body = this.entity.body2d.body;
            if (body) {
                // We only support a single fixture at the moment
                var fixture = body.GetFixtureList();
                fixture.SetRestitution(newValue);

                // Update the body with changes
                body.ResetMassData();
            }                
        },

        onSetRadius: function (name, oldValue, newValue) {
            if (!this.entity.body2d) {
                return;
            }

            var body = this.entity.body2d.body;
            if (body) {
                var fixture = body.GetFixtureList();
                var shape = fixture.GetShape();
                
                shape.SetRadius(this.radius);

                body.SetAwake(true);
            }
        }
    });

    return {
        CollisionCircleComponent: CollisionCircleComponent
    };
}());