// require([], function() {
//     'use strict';
//     console.log('entry point');
// });
var app = app || {};

$(function(){

    new app.AppView(app.defaults);

});


function GenerateData(count) {
    var data = {};
    for (var i = 0; i < count; i++) {
        app.Expences.create({
            title    : chance.word(),
            amount   : chance.natural({max: 1000}),
            category : chance.string({length: 4})
        });
    }
}