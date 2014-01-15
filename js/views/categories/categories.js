define([
    'backbone.marionette',
    'views/categories/category'
], function(Marionette, CategoryView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName : 'ul',
        id : 'category-list',

        itemView : CategoryView
    });
});
