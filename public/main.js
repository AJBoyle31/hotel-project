//going to redo this in react.js

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function(){
        return(
            <div>
            <h1>our app in its entirity</h1>  
            <Nav />
            </div>
        );
    }
});

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
                        <li className='navlinks'><a href='#search' id='search'>Search Hotels</a></li>
                        <li className='navlinks'><a href='#contact' id='contact'>Contact Us</a></li>
                    </ul>
                </div>
            </div>        
        </nav>    
        );
    }
});




var GetRates = React.createClass({
    getHotels: function(event){
        event.preventDefault();
        var info = {
            city: this.refs.city.value,
            checkin: this.refs.checkin.value,
            checkout: this.refs.checkout.value
        };
        this.props.getHotls(info);
        this.refs.formRates.reset();
    },
    render: function(){
        return (
            <div className="form-area">
            <form onSubmit={this.getHotels} ref="formRates" className="formRates">
                <label>City
                <select ref="city">
                    <option value='charlottesville'>Charlottesville</option>
                    <option value='newyork'>New York City</option>
                    <option value='chicago'>Chicago</option>
                </select>
                </label>
                <label>Check In
                <input type='text' ref='checkin' id='checkin' onChange={this.checkInSet} placeholder='YYYY-MM-DD' required />
                </label>
                <label>Check Out
                <input type='text' ref='checkout' id='checkout' onChange={this.checkOutSet} placeholder='YYYY-MM-DD' required />
                </label>
                <button type="submit" value="enter" class="button"/>
            </form>
            
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
