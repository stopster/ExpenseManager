define(['backbone'], function(Backbone){
    'use strict';

    return Backbone.Model.extend({

        // default attributes
        defaults : {
            title    : '',
            amount   : '',
            category : '',
            date     : (new Date()).toJSON()
        }
    });
});
