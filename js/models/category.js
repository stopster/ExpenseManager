define(['backbone'], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults : {
            title : '',
            color : '#c0c0c0'
        }
    });
});
