define([
        'zepto',
        'underscore',
        'backbone',

        'collections/expences',
        'collections/categories',
        'views/expence',
        'views/category'
       ], function($, _, Backbone,
            Expences,
            Categories,
            ExpenceView,
            CategoryView
        ) {
    'use strict';

    var AppView = Backbone.View.extend({
        el : '#content-wrapper',

        events : {
            'click #button-add-expence' : 'createNewExpence'
        },

        initialize : function(defaults) {

            console.log('App View initialize');

            this.$content    = this.$('#content');
            this.$menu       = $('#main-menu');

            this.$sections   = this.$('.content-section');
            this.$expences   = this.$('#expences');
            this.$categories = this.$('#categories');
            this.$statistics = this.$('#statistics');

            this.$expenceList = this.$('#expence-list');
            this.$categoryList = this.$('#category-list');


            this.listenTo(Expences,   'add', this.addExpence);
            this.listenTo(Categories, 'add', this.addCategory);

            this.initCategories(defaults.categories);
            this.initExpences();

            this.render();
        },

        render : function(){
            Backbone.Events.on('deliverSection', this.deliverSection, this);
            //this.deliverSection(app.State || '');
        },

        createNewExpence : function() {
            var amount   = prompt('amount'),
                category = prompt('category'),
                title    = prompt('title');

            Expences.create({
                title    : title,
                amount   : amount,
                category : category
            });
        },

        addExpence : function(expence) {
            var view = new ExpenceView({ model : expence });
            this.$expenceList.prepend( view.render().el );
        },

        addCategory : function(category) {
            var view = new CategoryView({ model : category });
            this.$categoryList.prepend( view.render().el );
        },

        initExpences : function() {
            Expences.fetch();
        },

        initCategories : function(categories) {
            Categories.fetch();

            if (Categories.size() === 0) {
                _.each(categories, function(category) {
                    Categories.create(category);
                });
            }
        },

        deliverSection : function(section) {
            // go to #expences by default
            if (!section) {
                Backbone.history.navigate('#/expences');
                return;
            }

            // show corresponding section
            this.$sections.hide();
            this['$' + section].show();

            // handle menu
            this.$menu.find('.selected').removeClass('selected');
            this.$menu.find('#menu-item-' + section).addClass('selected');
        }
    });

    return AppView;
});
