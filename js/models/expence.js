var app = app || {};

/**
* Basic Expence Model
*/
app.Expence = Backbone.Model.extend({

    // default attributes
    defaults : {
        title    : '',
        amount   : '',
        category : '',
        date     : (new Date()).toJSON()
    }
});