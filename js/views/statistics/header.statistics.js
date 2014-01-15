define([
    'underscore',
    'backbone.marionette',
    'text!templates/statistics/header.statistics.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template)
    });
});
