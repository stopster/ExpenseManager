define(['zepto', 'underscore', 'backbone', 'text!templates/category.tpl'],
    function($, _, Backbone, Template) {
    'use strict';

    return Backbone.View.extend({

        tagName : 'tr',

        className : 'category-item',

        template : _.template( Template ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render : function() {

            this.$el.html( this.template( this.model.toJSON() ) );

            return this;
        },

        delete : function() {
            this.model.destroy();
        }
    });
});
