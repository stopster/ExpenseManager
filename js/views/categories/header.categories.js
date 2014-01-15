define([
    'underscore',
    'backbone.marionette',
    'text!templates/categories/header.categories.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template),

        events : {
            'click #button-add-category' : 'addCategory'
        },

        addCategory : function() {
            console.log('addCategory');
        }
    });
});
