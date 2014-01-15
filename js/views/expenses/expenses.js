define([
    'backbone.marionette',
    'views/expenses/expense',
    'views/expenses/expenses.empty'
], function(Marionette, ExpenseView, ExpensesEmptyView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName : 'table',
        id : 'expense-list',

        itemView : ExpenseView,

        emptyView : ExpensesEmptyView
    });
});
