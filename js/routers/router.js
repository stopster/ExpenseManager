define(['backbone'], function(Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

        routes : {
            '*section' : 'gotoSection'
        },

        gotoSection : function(section) {
            Backbone.Events.trigger('deliverSection', section);
        }
      });

    return AppRouter;
});


