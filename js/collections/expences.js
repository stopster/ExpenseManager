var app = app || {};

app.ExpencesList = Backbone.Collection.extend({

    // Model used in Collection
    model : app.Expence,

    // place to save collection data
    // save all expences as "expences" namespace in Local Storage
    localStorage : new Backbone.LocalStorage("expences"),


    // filter all expences by category
    filter : function(category) {
        return this.filter(function(expence){
            return expence.get('category') === category;
        });
    },

});

app.Expences = new app.ExpencesList();