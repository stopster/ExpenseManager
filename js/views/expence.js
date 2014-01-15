define(['zepto', 'underscore', 'backbone'], function($, _, Backbone) {
    'use strict';

    return Backbone.View.extend({

        tagName : 'div',

        className : 'expence-item',

        template : _.template( $('#expence-view-template').html() ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy',this.remove);
        },

        render : function() {
            var date = this.transformDate(this.model.get('date')),
                modelObj = _.extend(this.model.toJSON(), {'date' : date});

            this.$el.html( this.template(modelObj) );

            return this;
        },

        transformDate : function(JSONdate) {
            var date = new Date(JSONdate),
                m;

            return date.toDateString() + ' ' +
                date.getHours() + ':' +
                ((m = date.getMinutes()) < 10 ? '0' + m : m);
        },

        edit : function(e) {
            var target = $(e.target),
                dimensions = {
                    width : target.width(),
                    height : target.height(),
                    offset : target.offset()
                },
                input = $('<input>').
                            height(dimensions.height).
                            width(dimensions.width).
                            offset(dimensions.offset);


            target.replaceWith(input);
        },

        delete : function() {
            this.model.destroy();
        }

    });
});
