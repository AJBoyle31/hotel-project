var React = require('react');
var ReactDOM = require('react-dom');

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

//<Hotels details={this.state.hotels} />
//Nav 
    //need to figure out how to get collapse to work
var Nav = React.createClass({
    render: function(){
        return (
            <nav className='nav navbar'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav navbar'>
                        <li className='navlinks'><a href='/'>Home</a></li>
                        <li className='navlinks'><a href='#cities' id='cities'>Cities We Represent</a></li>
                        <li className='navlinks'><a href='#search' onclick={this.props.showRates} id='search'>Search Hotels</a></li>
                        <li className='navlinks'><a href='#contact' id='contact'>Contact Us</a></li>
                    </ul>
                </div>
            </div>        
        </nav>    
        );
    }
});

//Get information from user regarding city, checkin and checkout dates. 
var GetRates = React.createClass({
    getInfo: function(event){
        event.preventDefault();
        var info = {
            city: this.refs.city.value,
            checkin: this.refs.checkin.value,
            checkout: this.refs.checkout.value
        };
        this.props.updateInfo(info);
    },
    render: function(){
        return (
            <div className="searchBox">
            <h3 className="searchHotels">Search Hotels</h3>
            <form ref="formRates" className="formRates" onSubmit={this.getInfo}>
                <label>City
                <select ref="city" id="city">
                    <option value='charlottesville'>Charlottesville</option>
                    <option value='newyork'>New York City</option>
                    <option value='chicago'>Chicago</option>
                </select>
                </label>
                <label>Check In
                <input type='text' ref='checkin' id='checkin' placeholder='YYYY-MM-DD' required />
                </label>
                <label>Check Out
                <input type='text' ref='checkout' id='checkout' placeholder='YYYY-MM-DD' required />
                </label>
                <input type="submit" value="Get Rates" />
            </form>
            
            </div>
        );
    }
});

var FilteredHotels = React.createClass({
    filterHotels: function(){
        var updatedHotels = this.state.hotelsResult;
        updatedHotels = updatedHotels.filter(function(){
            
        })
    },
    getInitialState: function(){
        return {
            hotelsResult: this.props.data,
            filteredHotels: []
        };
    },
    render: function(){
        var hotelNodes = this.props.data.map(function(hotel){
            if (hotel.available) {
                var rate = '$' + (Number(hotel['nightly_rate']).toFixed(0));
            } else {
                var rate = "Unavailable"; 
            }
            return (
                <Hotels photo={hotel.photos[0]['thumbnail']} name={hotel.name} rate={rate} />
            );
        });
        return (
            <div id='hotels'>{hotelNodes}</div>
        );
    }
});

var Hotels = React.createClass({
    render: function(){
        return (
            <div className="hotels">
            <a href='#'>
            <img src={this.props.photo} />
            <h3 className='hotelname'>{this.props.name}</h3>
            <h3 className='hotelrate'>{this.props.rate}</h3>
            </a>
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
