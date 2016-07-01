(function(){
    var Locations = Backbone.Model.extend({
        defaults:{
            "name": '',
            "country_code": '',
            "country_name": '',
            "id": '',
            "region_code': '',
            "lat": '',
            "full_name": '',
            "lng": ''
        }
    });
   
    var Places = Backbone.Collection.extend({
        url: 'http://localhost:8080/api/locations',
        model: Locations
    });
    
    var LocationView = Backbone.View.extend({
        tagName: 'div',
        className: 'locationContainer',
        template: $('#locationTemplate').html(), 
        
        render: function(){
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
        
    });
    
    var PlacesView = Backbone.View.extend({
        el: $('#location'),
        
        initialize: function(){
            this.collection = new Places(locations);
            this.render();
        },
        
        render: function(){
            var that = this;
            _.each(this.collection.models, function(item){
                that.renderLocation(item);
            }, this);
        }, 
        
        renderLocation: function(item){
            var locationView = new LocationView({
                model: item
            });
            this.$el.append(locationView.render().el);
        }
    });
    var placesView = new PlacesView();
    
   
    
    var myCollection = new Places();
    myCollection.fetch({
        success: function(){
            console.log('success');
        },
        error: function(){
            console.log('error');
        }
    });
    
    
    
})();

