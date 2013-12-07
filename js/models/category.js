var app = app || {};

app.Category = Backbone.Model.extend({
    defaults : {
        title : '',
        color : '#c0c0c0'
    }
});