define([
    'backbone.marionette',
    'views/category'
], function(Marionette, CategoryView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName : 'table',
        id : 'category-list',

        itemView : CategoryView
    });
});
