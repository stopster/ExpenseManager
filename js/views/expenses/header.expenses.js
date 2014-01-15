define([
    'underscore',
    'backbone.marionette',
    'text!templates/expenses/header.expenses.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template),

        events : {
            'click #button-add-expense' : 'addExpense'
        },

        addExpense : function() {
            window.GenerateData(1);
        }
    });
});
