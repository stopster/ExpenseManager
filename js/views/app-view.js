var app = app || {};

app.AppView = Backbone.View.extend({
    el : '#content-wrapper',

    events : {
        'click #button-add-expence' : 'createNewExpence'
    },

    initialize : function(defaults) {

        console.log('App View initialize');

        this.$content    = this.$('#content');
        this.$menu       = $('#main-menu');

        this.$sections   = this.$('.content-section');
        this.$expences   = this.$('#expences');
        this.$categories = this.$('#categories');
        this.$statistics = this.$('#statistics');

        this.$expenceList = this.$('#expence-list');
        this.$categoryList = this.$('#category-list');


        this.listenTo(app.Expences,   'add', this.addExpence);
        this.listenTo(app.Categories, 'add', this.addCategory);

        this.initCategories(defaults.categories);
        this.initExpences();

        this.render();
    },

    render : function(){
        this.deliverSection(app.State || '');

        Backbone.Events.on('deliverSection', this.deliverSection, this);
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
        var view = new app.ExpenceView({ model : expence });
        this.$expenceList.prepend( view.render().el );
    },

    addCategory : function(category) {
        var view = new app.CategoryView({ model : category });
        this.$categoryList.prepend( view.render().el );
    },

    initExpences : function() {
        app.Expences.fetch();
    },

    initCategories : function(categories) {
        app.Categories.fetch();

        if (app.Categories.size() === 0) {
            _.each(categories, function(category) {
                app.Categories.create(category);
            });
        }
    },

    deliverSection : function(section) {
        if (section === '') {
            return;
        }
        // show corresponding section
        this.$sections.hide();
        this['$' + section].show();

        // handle menu
        this.$menu.find('.selected').removeClass('selected');
        this.$menu.find('#menu-item-' + section).addClass('selected');
    }
});