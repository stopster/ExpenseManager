define([
    'underscore',
    'zepto',
    'backbone.marionette',
    'collections/expenses',
    'collections/categories',
    'text!templates/expenses/expense.new.tpl',
    'pikaday',
    'fancy.select'
], function(_, $, Marionette, ExpensesCollection, CategoriesCollection, Template, Pikaday) {
    'use strict';

    return Marionette.ItemView.extend({

        el : '#add-expense-wrapper',

        template : _.template( Template ),

        config : {
            amount   : '#expense-new-amount',
            category : '#expense-new-category',
            title    : '#expense-new-title',
            date     : '#expense-new-date'
        },

        events : {
            'click #expense-new-save'  : 'save',
            'click #expense-new-clear' : 'clear',
            'keydown #expense-new-amount' : 'filterNumbers'
        },

        render : function() {
            var root = this;

            this.$el.html(this.template({
                categories : CategoriesCollection.toJSON()
            }));

            this.$amount   = this.$(this.config.amount);
            this.$title    = this.$(this.config.title);
            this.$category = this.$(this.config.category);
            this.$date     = this.$(this.config.date);

            this.picker = new Pikaday({
                field : root.$date[0],
                bound: false
            });
            this.picker.setDate(new Date().toJSON());

            this.$category.fancySelect();

            return this;
        },

        save : function() {
            var amount = _.escape(this.$amount.val()),
                title  = _.escape(this.$title.val()),
                date   = new Date(this.picker.getDate()).toDateString(),
                category = this.getCategory();

            if (!amount) {
                console.warn('Amount field empty');
                return;
            }
            if (!title) {
                console.warn('Title field empty');
                return;
            }

            ExpensesCollection.create({
                amount   : amount,
                title    : title,
                date     : date,
                category : category.toJSON()
            });

            this.clear();
        },

        clear : function() {
            this.$amount.val('');
            this.$title.val('');
            this.picker.setDate(new Date().toJSON());
            this.$category.trigger('update');
        },

        filterNumbers : function() {
            // console.log(String.fromCharCode(e.keyCode));
        },

        getCategory : function() {
            var select = this.$category[0],
                option = select.options[select.selectedIndex],
                title = $(option).val(),
                color = $(option).data('color');

            return CategoriesCollection.findWhere({
                color : color,
                title : title
            });
        },

        remove : function() {
            this.picker.destroy();
            this.$el.off();

            Marionette.ItemView.prototype.remove.call(this);
        }
    });
});
