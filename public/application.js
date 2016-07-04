//when the search cities nav link is clicked, the cities are loaded
$('#cities').click(function(){
    
    $('#searchbox').hide();
    $('#contactus').hide();
    $('#location').show();
    
    //charlottesville, nyc, chicago
    //change to an object {charlottesville: picture, chicago: picture, nyc: picture }
    cityPics = ['http://az616578.vo.msecnd.net/files/2016/03/19/635939924999229260-1043665980_1400-charlottesville-va-downtown.imgcache.rev1409086909867.web.jpg', 'http://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline1536.jpg','http://chicagoraffaello.com/wp-content/uploads/2013/08/chicago-skyline.jpg'];
    
    function whatPic(city){
        switch(city) {
            case 'charlottesville':
                return cityPics[0];
                break;
            case 'newyork':
                return cityPics[1];
                break;
            case 'chicago':
                return cityPics[2];
                break;
            default:
                return cityPics[0];
                break;
      }  
    }
    
    
    //container for a location object
    var LocationModel = Backbone.Model.extend({});
    
    //basic view rendering a single location
    var LocationView = Backbone.View.extend({
        tagName: 'div',
        className: 'loc',
        render: function(){
            //just render the location name and region code of this object
            $(this.el).html(
                '<h4>' + this.model.get("name") + ', ' + this.model.get("region_code") + '</h4>' +
                '<img id="pic" src=' + whatPic(this.model.get("id")) + '>'
                );
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




//add MVC for hotels when a search is run
//regex /\d{4}-\d{2}-\d{2}/   
    
function hotelSearch(area, cin, cout){
    
    var city = area;
    var checkin = cin;
    var checkout = cout;
    
    
    $('#searchbox').hide();
    
    //container for hotel model
    var HotelModel = Backbone.Model.extend({});
    
    var HotelView = Backbone.View.extend({
        tagName: "div",
        className: "hotel",
        render: function(){
            $(this.el).html(
                '<h3>' + this.model.get("name") + '</h3><br><h3>' + this.model.get("chain") + '</h3>'
                );
            return this;
        }
    });
    
    var HotelsCollection = Backbone.Collection.extend({
        model: HotelModel,
        url: 'https://roomkey-frontend-project-ajboyle.c9users.io/api/locations/' + city + '/hotels?checkin=' + checkin + '&checkout=' + checkout
    });
    
    var HotelsView = Backbone.View.extend({
        el: "#hotels",
        initialize: function(options){
            //Bind on initialize rather than rendering. reason we are binding versus rendering is because
            //we only want to bind to 'add' once.
            this.collection.bind("add", function(model){
                var hotelView = new HotelView({
                    model: model
                });
            $(this.el).prepend(hotelView.render().el);
            }, this);
        },
        render: function(){
            return this;
        }
    });
    
    var assemblyHotels = new HotelsCollection([],{
        language: "assembly"
    });
    
    var assemblyHotelsView = new HotelsView({
        collection: assemblyHotels
    });
    
    $('#hotels').html(assemblyHotelsView.render().el);
    
    assemblyHotels.fetch();
    
};




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
});

//on submit button click, input values stored in variables, dates are validated, if valid hotelSearch function is called
$('#submit').click(function(e){
    var x = $('#checkin').val();
    var y = $('#checkout').val();
    var city = $('#selloc').val();
    
    if (!validateDate(x, y)){
        e.preventDefault();
    }
    else {
        hotelSearch(city, x, y);
    }

});

//function to validate the check in and out dates entered by user to make sure they are the correct format and the 
//check out date is after the check in date
function validateDate(x, y) {
    //regex /\d{4}-\d{2}-\d{2}/ 
    //x is checkin
    //y is checkout
    var regex = /\d{4}-\d{2}-\d{2}/;
    
    var xYear = x.slice(0,4);
    var xMonth = x.slice(5,7);
    var xDay = x.slice(8,10);
    
    var yYear = y.slice(0,4);
    var yMonth = y.slice(5,7);
    var yDay = y.slice(8,10);
    
    if (!regex.test(x)) {
        alert('Invalid Date');
        return false;
    } 
    if (!regex.test(y)) {
        alert('Invalid Date');
        return false;
    }
    if (yYear > xYear) {
        return true;
    }
    else {
        if (yMonth > xMonth){
            return true;
        }
        else {
            if (yDay > xDay){
                return true;
            }
            else {
                alert("Invalid Date Range");
                return false;
            }
        }
    }
     
}