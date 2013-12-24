require([
    'backbone',
    'defaults',
    'routers/router',
    'views/app-view'
    ], function(Backbone, defaults, Router, AppView) {
    'use strict';

    $(function(){
        new AppView(defaults);

        new Router();

        Backbone.history.start();
    });


    // generate random data
    window.GenerateData = function(count) {

        require(['Chance', 'collections/expences', 'collections/categories'],
            function(Chance, Expences, Categories){
            var chance = new Chance(),
                category;

            for (var i = 0; i < count; i++) {
                category = _.sample(Categories.models);

                Expences.create({
                    title    : chance.word(),
                    amount   : chance.natural({max: 1000}),
                    category : category.toJSON()
                });
            }
        });
    };
});
