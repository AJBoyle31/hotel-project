import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import 'whatwg-fetch';

const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

class App extends Component {
    constructor(){
        super();
        this.getHotelsSearch = this.getHotelsSearch.bind(this);
        this.getHotel = this.getHotel.bind(this);
        this.clearHotel = this.clearHotel.bind(this);
        this.clearHotelsSearch = this.clearHotelsSearch.bind(this);
        
        this.state = {
            hotel: [],
            hotelsSearch: [],
            city: "",
            checkin: "",
            checkout: ""
        };
        
    }
    getHotelsSearch(city, checkin, checkout){
        let urlRemainder = city + '/hotels?checkin=' + checkin + '&checkout=' + checkout;
        
        fetch(API_URL + urlRemainder, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ 
                hotelsSearch: responseData, 
                city: city,
                checkin: checkin,
                checkout: checkout
            });
        })
        .catch((error) => {
            console.log('Error fetching and parsing data hotels', error);
        });
    }
    getHotel(hotelId){
        fetch(API_URL + this.state.city + "/hotels/" + hotelId + "?checkin=" + this.state.checkin + "&checkout=" + this.state.checkout, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ 
                hotel: responseData 
            });
        })
        .catch((error) => {
            
            console.log('Error fetching and parsing data hotel ', error);
        });
    }
    clearHotel(){
        this.setState({
            hotel: []
        });
    }
    clearHotelsSearch(){
        this.setState({
            hotelsSearch: []
        });
    }
    render(){
        return(
            <div>
                <h1 className="title">HotelsLite.com</h1>
                <h3 className="subtitle">The Limited Choice in Hotels!</h3>
                
                <Nav taskCallbacks={{
                    getHotel: this.getHotel,
                    getHotelsSearch: this.getHotelsSearch,
                    clearHotel: this.clearHotel,
                    clearHotelsSearch: this.clearHotelsSearch }} 
                    
                    hotelData={{
                        hotel: this.state.hotel,
                        hotelsSearch: this.state.hotelsSearch,
                        city: this.state.city,
                        checkin: this.state.checkin,
                        checkout: this.state.checkout,
                    }}    
                />
                
            </div>
        );
    }
}



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
