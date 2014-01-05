define(['zepto', 'underscore', 'backbone', 'backbone.marionette', 'text!templates/category.tpl'],
    function($, _, Backbone, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName : 'tr',

        className : 'category-item',

        template : _.template( Template ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },

        delete : function() {
            this.model.destroy();
        }
    });
});
