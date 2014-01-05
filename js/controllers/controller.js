define(['zepto',
        'underscore',
        'backbone',
        'backbone.marionette',

        'defaults',
        'app',

        'collections/expenses',
        'collections/categories',

        'views/expenses',
        'views/categories',
        'views/statistics',

        'views/header.expenses',
        'views/header.categories',
        'views/header.statistics'
], function($, _, Backbone, Marionette, defaults, App, ExpensesCollection, CategoriesCollection, ExpensesView, CategoriesView, StatisticsView, ExpensesHeaderView, CategoriesHeaderView, StatisticsHeaderView) {
    'use strict';

    var Controller = Marionette.Controller.extend({
        initialize : function() {

            this.initExpenses();
            this.initCategories();

            this.views = {
                content : {
                    expenses   : {
                        view : ExpensesView,
                        collection : ExpensesCollection
                    },
                    categories : {
                        view : CategoriesView,
                        collection : CategoriesCollection
                    },
                    statistics : {
                        view : StatisticsView,
                        collection : null
                    }
                },
                header : {
                    expenses   : ExpensesHeaderView,
                    categories : CategoriesHeaderView,
                    statistics : StatisticsHeaderView
                }

            };
        },

        // fired by router
        deliverSection : function(section) {
            // go to #expenses by default
            if (!section) {
                Backbone.history.navigate('#/expenses');
                return;
            }

            // show corresponding section
            App.contentRegion.show( new this.views.content[section].view({
                collection : this.views.content[section].collection
            }));

            // handle menu
            this.handleMenu(section);

            //handle header
            this.handleHeader(section);
        },

        handleMenu : function(section) {
            App.menuRegion.ensureEl();

            App.menuRegion.$el.find('.selected').removeClass('selected');
            App.menuRegion.$el.find('#menu-item-' + section).addClass('selected');
        },

        handleHeader : function(section) {
            App.contentHeaderRegion.show(new this.views.header[section]());
        },

        initExpenses : function() {
            ExpensesCollection.fetch();
        },

        initCategories : function() {
            var categories = defaults.categories;

            CategoriesCollection.fetch();

            if (CategoriesCollection.size() === 0) {
                _.each(categories, function(category) {
                    CategoriesCollection.create(category);
                });
            }
        },
    });

    return new Controller();
});
