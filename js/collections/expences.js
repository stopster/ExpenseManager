define(['backbone', 'models/expence', 'backbone.localStorage'],
    function(Backbone, Expence) {

    'use strict';

    var ExpencesList = Backbone.Collection.extend({

        // Model used in Collection
        model : Expence,

        // place to save collection data
        // save all expences as "expences" namespace in Local Storage
        localStorage : new Backbone.LocalStorage('expences'),


        // filter all expences by category
        filter : function(category) {
            return this.filter(function(expence){
                return expence.get('category') === category;
            });
        },

    });

    return new ExpencesList();
});



