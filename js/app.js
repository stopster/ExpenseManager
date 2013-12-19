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
            var chance = new Chance();

            for (var i = 0; i < count; i++) {
                Expences.create({
                    title    : chance.word(),
                    amount   : chance.natural({max: 1000}),
                    category : chance.string({length: 4})
                });
            }
        });
    };
});
