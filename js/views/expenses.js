define([
    'backbone.marionette',
    'views/expense',
    'views/expenses.empty'
], function(Marionette, ExpenseView, ExpensesEmptyView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName : 'table',
        id : 'expense-list',

        itemView : ExpenseView,

        emptyView : ExpensesEmptyView
    });
});
