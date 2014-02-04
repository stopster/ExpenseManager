define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'collections/expenses',
    'collections/categories',

    'views/statistics/statictics.categories.donut',
    'text!templates/statistics/statistics.tpl'
], function(_, Backbone, Marionette, ExpensesCollection, CategoriesCollection, CategoriesDonut, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template),

        initialize : function() {
            this.subViews = [
                CategoriesDonut
            ];

            this.initSubViews();
        },

        initSubViews : function() {
            this.subViews = this.subViews.map(function(subView) {
                return new subView({
                    model : new Backbone.Model({
                        categories : CategoriesCollection.toJSON(),
                        expenses   : ExpensesCollection.toJSON()
                    })
                });
            });
        },

        onShow : function() {
            this.$el.empty();

            this.subViews.forEach(function(subView) {
                this.$el.append(subView.render().$el);
            }, this);
        }
    });
});
