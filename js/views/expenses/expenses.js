define([
    'underscore',
    'backbone.marionette',
    'views/expenses/expense',
    'views/expenses/expense.new',
    'views/expenses/expenses.empty',
    'text!templates/expenses/expenses.tpl'
], function(_, Marionette, ExpenseView, NewExpenseView, ExpensesEmptyView, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        template : _.template(Template),

        itemView : ExpenseView,

        itemViewContainer: '#expenses-list',

        emptyView : ExpensesEmptyView,

        onShow: function() {
            this.newExpense = new NewExpenseView().render();
        },

        // overriding Marionette "appendHtml" method
        // to insert itemView at a specified position, as it is in the collection
        appendHtml : function(compositeView, itemView, index) {
            var $container, $nextEl;

            if (compositeView.isBuffering) {
                compositeView.elBuffer.appendChild(itemView.el);
            } else {
                $container = this.getItemViewContainer(compositeView);
                $nextEl    = $container.children().eq(index);

                if ($nextEl.length) {
                    itemView.$el.insertBefore($nextEl);
                } else {
                    $container.append(itemView.el);
                }
            }
        }
    });
});
