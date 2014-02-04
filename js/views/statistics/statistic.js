define([
    'underscore',
    'backbone.marionette',
    'text!templates/statistics/statistic.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        template : _.template(Template),

        initialize : function() {
            this.categories = this.model.get('categories');
            this.expenses   = this.model.get('expenses');
        }

    });
});
