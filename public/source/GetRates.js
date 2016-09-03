import React, {Component} from 'react';
import HotelsList from './HotelsList';
import Hotel from './Hotel';
import 'whatwg-fetch';
import datepicker from 'bootstrap-datepicker';

const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};


//Get information from user regarding city, checkin and checkout dates. 
class GetRates extends Component {
    
    handleSubmit(event){
        let city = event.target.city.value;
        let checkin = event.target.checkin.value;
        let checkout = event.target.checkout.value;
        this.props.taskCallbacks.clearHotel;
        this.props.taskCallbacks.getHotelsSearch(city, checkin, checkout);
        event.preventDefault();
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