// define([
//         'zepto',
//         'underscore',
//         'backbone',

//         'collections/expenses',
//         'collections/categories',
//         'views/expense',
//         'views/category'
//        ], function($, _, Backbone,
//             Expenses,
//             Categories,
//             ExpenseView,
//             CategoryView
//         ) {
//     'use strict';

//     var AppView = Backbone.View.extend({
//         el : '#content-wrapper',

//         events : {
//             'click #button-add-expense' : 'createNewExpense'
//         },

//         initialize : function(defaults) {

//             console.log('App View initialize');

//             this.$content    = this.$('#content');
//             this.$menu       = $('#main-menu');

//             this.$sections   = this.$('.content-section');
//             this.$expenses   = this.$('#expenses');
//             this.$categories = this.$('#categories');
//             this.$statistics = this.$('#statistics');

//             this.$expenseList = this.$('#expense-list');
//             this.$categoryList = this.$('#category-list');


//             this.listenTo(Expenses,   'add', this.addExpense);
//             this.listenTo(Categories, 'add', this.addCategory);

//             this.initCategories(defaults.categories);
//             this.initExpenses();

//             this.render();
//         },

//         render : function(){
//             Backbone.Events.on('deliverSection', this.deliverSection, this);
//             //this.deliverSection(app.State || '');
//         },

//         createNewExpense : function() {
//             window.GenerateData(1);
//         },

//         addExpense : function(expense) {
//             var view = new ExpenseView({ model : expense });
//             this.$expenseList.prepend( view.render().el );
//         },

//         addCategory : function(category) {
//             var view = new CategoryView({ model : category });
//             this.$categoryList.prepend( view.render().el );
//         },

//         initExpenses : function() {
//             Expenses.fetch();
//         },

//         initCategories : function(categories) {
//             Categories.fetch();

//             if (Categories.size() === 0) {
//                 _.each(categories, function(category) {
//                     Categories.create(category);
//                 });
//             }
//         },

//         deliverSection : function(section) {
//             // go to #expenses by default
//             if (!section) {
//                 Backbone.history.navigate('#/expenses');
//                 return;
//             }

//             // show corresponding section
//             this.$sections.hide();
//             this['$' + section].show();

//             // handle menu
//             this.$menu.find('.selected').removeClass('selected');
//             this.$menu.find('#menu-item-' + section).addClass('selected');
//         }
//     });

//     return AppView;
// });
