(function(){
    
    
    var LocationModel = Backbone.Model.extend({});
    
    var LocationView = Backbone.View.extend({
        tagName: 'li',
        className: 'loc',
        render: function(){
            $(this.el).html(
                '<b>' + this.model.get("name") + '</b> - ' + this.model.get("country_code"));
            return this;
        }
    });
    
    var LocationsCollection = Backbone.Collection.extend({
        model: LocationModel,
        url: 'https://roomkey-frontend-project-ajboyle.c9users.io/api/locations/'
        
    });
    
    var LocationsView = Backbone.View.extend({
        tagName: "ul",
        className: "locs",
        initialize: function(options){
            this.collection.bind("add", function(model){
                var locationView = new LocationView({
                    model: model
                });
            $(this.el).prepend(locationView.render().el);
            }, this);
        },
        render: function(){
            return this;
        }
    });
    
    var assemblyLocs = new LocationsCollection([], {
        language: "assembly"
    });
    
    var assemblyLocsView = new LocationsView({
        collection: assemblyLocs
    });
    
    $('#location').html(assemblyLocsView.render().el);
    
    assemblyLocs.fetch();
    
    
})();

