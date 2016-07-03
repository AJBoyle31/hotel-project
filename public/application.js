$('#cities').click(function(){
    
    $('#searchbox').hide();
    $('#location').show();
    
    
    //container for a location object
    var LocationModel = Backbone.Model.extend({});
    
    //basic view rendering a single location
    var LocationView = Backbone.View.extend({
        tagName: 'div',
        className: 'loc',
        render: function(){
            //just render the location name and country code of this object
            $(this.el).html(
                '<b>' + this.model.get("name") + '</b> - ' + this.model.get("country_code"));
            return this;
        }
    });
    
    //a collection holding many locations and responsible for performing the search that fetches them
    var LocationsCollection = Backbone.Collection.extend({
        model: LocationModel,
        url: 'https://roomkey-frontend-project-ajboyle.c9users.io/api/locations/'
        
    });
    
    //rendering of a collection of locations
    var LocationsView = Backbone.View.extend({
        el: '#location',
        initialize: function(options){
            //Bind on initialize rather than rendering. reason we are binding versus rendering is because
            //we only want to bind to 'add' once.
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
    
    //create a new assembly language repo collection
    var assemblyLocs = new LocationsCollection([], {
        language: "assembly"
    });
    
    //create a view that will contain the locations 
    var assemblyLocsView = new LocationsView({
        collection: assemblyLocs
    });
    
    //Render the view regardless of the fact that it has not been fetched. This might need to change.
    $('#location').html(assemblyLocsView.render().el);
    
    //fetch the data from the server
    assemblyLocs.fetch();
    
});


//when user clicks search hotels in nav bar, everything is hidden except searchbox
$('#search').click(function(){
    $('#location').hide();
    $('#contactus').hide();
    $('#searchbox').show();
});

//when user clicks contact us in nav bar, everything is hidden except contact us form
$('#contact').click(function(){
    $('#location').hide();
    $('#searchbox').hide();
    $('#contactus').show();
})