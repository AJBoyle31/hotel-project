var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('./Nav');
var GetRates = require('./GetRates');
var FilteredHotels = require('./FilteredHotels');
var FilterOptions = require('./FilterOptions');

//Breakdown of the page
    //App - holds all other views
    //Nav - holds the navbar
    //GetRates - holds the form for city, checkin and checkout
    //ContactUs - holds the form for contacting us
    //Cities - holds the view for the cities we represent
    //HotelsList - holds the view for results after user submits GetRates form
    //Hotel - holds view for a single hotel a user clicks on
    //Filters - holds view for filtering HotelsList

//Known issues
    //have to click form submit twice to get results
    //nav collapse doesn't work


//App
var App = React.createClass({
    getHotelsFromServer: function(){
        var url = 'https://hotel-project-ajboyle.c9users.io/api/locations/' + this.state.information.city + '/hotels?checkin=' + this.state.information.checkin + '&checkout=' + this.state.information.checkout;
        $.ajax({
            url: url, 
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({ hotels: data });
            }.bind(this),
            error: function(xhr, status, err){
                console.error(url, status, err.toString());
            }.bind(this) 
        });
    },
    getInitialState: function(){
        return {
            hotels: [],
            information: {},
            hotel: {}
        };  
    },
    componentDidMount: function(){
        this.getHotelsFromServer();
        
    },
    
    updateInfo: function(info){
        this.setState({ information: info });
        this.getHotelsFromServer();
    },
    renderHotels: function(key){
        return (<Hotels key={key} details={this.state.hotels[key]} />);
    },
    render: function(){
        return(
            <div>
                <h1 className="title">HotelsLite.com</h1>
                <h3 className="subtitle">The Limited Choice in Hotels!</h3>
                <Nav />
                <GetRates updateInfo={this.updateInfo} />
                <div className="listOfHotels">
                    <FilteredHotels data={this.state.hotels} />      
                </div>
                </div>
        );
    }
});











ReactDOM.render(<App />, document.getElementById("app"));







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

//for slideshow on hotel view
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

//handles slideshow of pictures
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideShow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//handles the star rating of the hotel
function stars() {
    var star = $('.stars').prop('id');
    star = Number(star);
    var arr = ['a','b','c','d','e'];
    
    for (var m = 0; m < 6; m++) { 
        if (m <= star) { $('#' + arr[m]).html("&#9733"); } 
    }
    
}
