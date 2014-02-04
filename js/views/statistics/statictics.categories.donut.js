define([
    'views/statistics/statistic',
    'snap.svg',
], function(Statistic, Snap) {
    'use strict';

    return Statistic.extend({

        onRender : function() {

            this.svg = Snap(this.$el.find('svg')[0]);

            this.svg.circle(100, 100, 50);

            console.log(this.categories, this.expenses);
        }
    });
});
