define([
    'underscore',
    'backbone.marionette',
    'text!templates/header.statistics.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template)
    });
});
