var app = app || {};

app.CategoriesList = Backbone.Collection.extend({

    model : app.Category,

    localStorage : new Backbone.LocalStorage('categories'),

});

app.Categories = new app.CategoriesList();