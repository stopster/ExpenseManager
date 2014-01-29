define([
    'underscore',
    'backbone.marionette',
    'collections/expenses',
    'collections/categories',

    'views/statistics/statictics.categories.donut',
    'text!templates/statistics/statistics.tpl'
], function(_, Marionette, ExpensesCollection, CategoriesCollection, CategoriesDonut, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template),

        initialize : function() {
            this.subViews = [
                CategoriesDonut
            ];

            this.subViews = this.subViews.map(function(subView) {
                console.log(subView, CategoriesDonut);
                return new subView({
                    categories : CategoriesCollection,
                    expenses   : ExpensesCollection,
                });
            });
        },

        onShow : function() {
            this.subViews.forEach(function(subView) {
                console.log(subView.render());
                this.$el.append(subView.render().$el);
            }, this);
        }
    });
});
