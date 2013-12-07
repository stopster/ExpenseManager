var app = app || {};

app.AppView = Backbone.View.extend({
    el : '#content-wrapper',

    events : {
        'click #button-add' : 'createNewExpence'
    },

    initialize : function(defaults) {
        var categories = defaults.categories;

        console.log('App View initialize');

        this.initCategories(defaults.categories);

        this.$content = this.$('#content');
        this.$expenceList = this.$('#expence-list');


        this.listenTo(app.Expences,   'add', this.addExpence);
        this.listenTo(app.Categories, 'add', this.addCategory);


        app.Expences.fetch();
    },

    render : function(){
        console.log('AppView render');
    },

    createNewExpence : function() {
        var amount   = prompt('amount'),
            category = prompt('category'),
            title    = prompt('title');

        app.Expences.create({
            title    : title,
            amount   : amount,
            category : category
        });
    },

    addExpence : function(expence) {
        var view = new app.ExpenceView( { model : expence } );
        this.$expenceList.prepend( view.render().el );
    },

    initCategories : function(categories) {
        app.Categories.fetch();

        if (app.Categories.size() === 0) {
            _.each(categories, function(category) {
                app.Categories.create(category);
            });
        }
    }
});