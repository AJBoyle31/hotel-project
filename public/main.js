//going to redo this in react.js

var React = require('react');
var ReactDOM = require('react-dom');

var GetRates = React.createClass({
    
    getInitialState: function(){
        return {
            city: "",
            checkin: "",
            checkout: "",
            hotel: ""
        };
    },
    citySet: function(event){
        this.setState({ city: event.target.value });
    },
    checkInSet: function(event){
      this.setState({ checkin: event.target.value });  
    },
    checkOutSet: function(event){
      this.setState({ checkout: event.target.value });  
    },
    onSubmit: function(event){
        var self = this;
        var url = 'https://roomkey-frontend-project-ajboyle.c9users.io/api/locations/' + city + '/hotels?checkin=' + checkin + '&checkout=' + checkout;
        this.setState({
            city: city,
            checkin: checkin,
            checkout: checkout
        });
        
        $.ajax(url).done(function(data){
            self.setState({
                hotel: data.map(function(repo){
                    return(<h5>{repo.name}</h5>);
                })
            });
        });
    },
    
    render: function(){
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <select name='city' onChange={this.citySet}>
                    <option value='charlottesville'>Charlottesville</option>
                    <option value='newyork'>New York City</option>
                    <option value='chicago'>Chicago</option>
                </select>
                <input type='text' name='checkin' id='checkin' onChange={this.checkInSet} placeholder='YYYY-MM-DD'/>
                <input type='text' name='checkout' id='checkout' onChange={this.checkOutSet} placeholder='YYYY-MM-DD'/>
                <input type="submit" value="enter" />
            </form>
            <div>{this.state.hotel}</div>
            </div>
        );
    }
});

ReactDOM.render(<GetRates />, document.getElementById("app"));







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
