define([
    'underscore',
    'backbone.marionette',
    'views/expenses/expense',
    'views/expenses/expenses.empty',
    'text!templates/expenses/expenses.tpl'
], function(_, Marionette, ExpenseView, ExpensesEmptyView, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        events : {
            'click #button-add-expense' : 'addExpense'
        },

        template : _.template(Template),

        itemView : ExpenseView,

        itemViewContainer: '#expenses-list',

        emptyView : ExpensesEmptyView,

        initialize: function(){
            this.newItemView = new ExpenseView({ isNew: true });
            this.$("#add-expense-container").html(this.newItemView.render(true).el);
        },

        addExpense : function() {
            var savedExpense = this.newItemView.saveModel();
            var savedExpenseView = new ExpenseView({ model: savedExpense });
            this.$(this.itemViewContainer).append(savedExpenseView.render().el);
        }
    });
});
