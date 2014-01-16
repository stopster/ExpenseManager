define([
    'underscore',
    'backbone.marionette',
    'collections/categories',
    'defaults',
    'text!templates/categories/add.category.tpl'
], function(_, Marionette, CategoriesCollections, defaults, Template){
    'use strict';

    return Marionette.ItemView.extend({
        events : {
            'click #add-category-save'   : 'saveCategory',
            'click #add-category-cancel' : 'cancel'
        },

        id : 'add-category',

        template : _.template(Template),

        render : function() {
            this.$el.html(this.template(defaults));

            return this;
        },

        saveCategory : function() {
            var title = this.$el.find('#add-category-input-title').val(),
                color = this.$el.find('#add-category-select-color').val();

            //TODO: add check if title or color was empty
            // if so, prompt user to enter it's values

            CategoriesCollections.create({
                title : title,
                color : color
            });

            //remove form
            this.cancel();
        },

        cancel : function() {
            this.undelegateEvents();
            this.$el.off();
            this.remove();
        }
    });
});
