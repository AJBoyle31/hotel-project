import React, {Component} from 'react';
import HotelsList from './HotelsList';
import 'whatwg-fetch';

const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

//Get information from user regarding city, checkin and checkout dates. 
class GetRates extends Component {
    constructor(){
        super();
        this.state = {
            hotels: []
        };
    }
    getHotels(checkin, checkout, city){
        
        let urlRemainder = city + '/hotels?checkin=' + checkin + '&checkout=' + checkout;
        
        fetch(API_URL + urlRemainder, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({hotels: responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }
    handleSubmit(event){
        let city = event.target.city.value;
        let checkin = event.target.checkin.value;
        let checkout = event.target.checkout.value;
        this.getHotels(checkin, checkout, city);
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
                <input type='text' name='checkin' id='checkin' placeholder='YYYY-MM-DD' required />
                </label>
                <label>Check Out
                <input type='text' name='checkout' id='checkout' placeholder='YYYY-MM-DD' required />
                </label>
                <button type="submit">Get Rates</button>
            </form>
            <HotelsList data={this.state.hotels} />
            </div>
        );
    }
}

export default GetRates;