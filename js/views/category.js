define(['zepto', 'underscore', 'backbone'], function($, _, Backbone) {
    'use strict';

    return Backbone.View.extend({

        tagName : 'tr',

        className : 'category-item',

        template : _.template( $('#category-view-template').html() ),

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
