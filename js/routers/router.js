  var AppRouter = Backbone.Router.extend({

    routes : {
        // 'expences'   : 'gotoExpences',
        // 'categories' : 'gotoCategories',
        // 'statistics' : 'gotoStatistics'
        '*section' : 'gotoSection'
    },

    gotoCategories : function () {
        console.log('gotoCategories');
    },

    gotoStatistics : function () {
        console.log('gotoStatistics');
    },

    gotoExpences : function () {
        console.log('gotoExpences');
    },

    gotoSection : function(section) {
        app.State = section || '';

        Backbone.Events.trigger('deliverSection', section);
    }
  });

app.Router = new AppRouter();

Backbone.history.start();
