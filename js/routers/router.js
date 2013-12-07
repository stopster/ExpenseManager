  var AppRouter = Backbone.Router.extend({

    routes : {
        '#/'         : 'gotoExpences',
        'categories' : 'gotoCategories',
        'statistics' : 'gotoStatistics'
    },

    gotoCategories : function () {
        console.log('gotoCategories');
    },

    gotoStatistics : function () {
        console.log('gotoStatistics');
    },

    gotoExpences : function () {
        console.log('gotoExpences');
    }
  });

app.Router = new AppRouter();

Backbone.history.start();
