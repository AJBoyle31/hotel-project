import React, {Component} from 'react';
import HotelsList from './HotelsList';
import Hotel from './Hotel';
import 'whatwg-fetch';
import datepicker from 'bootstrap-datepicker';

const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations/';
//const API_URL = 'https://ajbhotelpage.herokuapp.com/api/locations/'
const API_HEADERS = {
    'Content-Type': 'application/json'
};

//function to validate the check in and out dates entered by user to make sure they are the correct format and the 
//check out date is after the check in date
function validateDate(x, y) {
    //x is checkin
    //y is checkout
    var xYear = Number(x.slice(0,4));
    var xMonth = Number(x.slice(5,7));
    var xDay = Number(x.slice(8,10));

    var yYear = Number(y.slice(0,4));
    var yMonth = Number(y.slice(5,7));
    var yDay = Number(y.slice(8,10));
    
    if (xYear > yYear) {
        console.log(xYear);
        alert("Invalid Date Range");
        return false;
    }
    else {
        if (xMonth > yMonth){
            console.log(xMonth);
            alert("Invalid Date Range");
            return false;
        }
        else {
            if (xDay > yDay){
                alert("Invalid Date Range");
                console.log("checkin is " + xDay);
                console.log("checkout is " + yDay);
                return false;
            }
            else {
                return true;
            }
        }
    }
}

//Get information from user regarding city, checkin and checkout dates. 
class GetRates extends Component {
    
    handleSubmit(event){
        let city = event.target.city.value;
        let checkin = event.target.checkin.value;
        let checkout = event.target.checkout.value;
        if (validateDate(checkin, checkout)){
            this.props.taskCallbacks.clearHotel;
            this.props.taskCallbacks.getHotelsSearch(city, checkin, checkout);
            event.preventDefault();
        } else {
            event.preventDefault();
        }
    }
    render(){
        
        return (
            <div className="searchBox">
            <h3 className="searchHotels">Search Hotels</h3>
            <form ref="formRates" className="formRates" onSubmit={this.handleSubmit.bind(this)}>
                <label>City
                <select name="city" id="city">
                    <option value='charlottesville'>Charlottesville</option>
                    <option value='newyork'>New York City</option>
                    <option value='chicago'>Chicago</option>
                </select>
                </label>
                <label>Check In
                <input type='text' name='checkin' id='checkin' placeholder='YYYY-MM-DD' data-provide="datepicker" data-date-format="yyyy/mm/dd" data-autoclose="true" required />
                </label>
                <label>Check Out
                <input type='text' name='checkout' id='checkout' placeholder='YYYY-MM-DD' data-provide="datepicker" data-date-format="yyyy/mm/dd" required />
                </label>
                <button type="submit" id="getRates">Get Rates</button>
            </form>
            
            <HotelsList taskCallbacks={this.props.taskCallbacks} hotelData={this.props.hotelData} />
            
            
            </div>
        );
    }
}

export default GetRates;