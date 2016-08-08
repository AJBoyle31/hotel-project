import React, {Component} from 'react';
import HotelsIndv from './HotelsIndv';
import FilterOptions from './FilterOptions';
import Hotel from './Hotel';
import 'whatwg-fetch';

const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};
//'https://hotel-project-ajboyle.c9users.io/api/locations/' + city + '/hotels/' + hotel.id + '?checkin=' + checkin + '&checkout=' + checkout


class HotelsList extends Component {
    constructor(){
        super();
        this.state = {
            hotel: [],
            showHotel: false
        };
    }
    getHotel(){
        fetch(API_URL + this.props.info.city + '/hotels/' + this.hotel.id + '?checkin=' + this.props.info.checkin + '&checkout=' + this.props.info.checkout, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ 
                hotel: responseData, 
                showHotel: true
            });
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }
    render(){
        var city = this.props.info.city;
        var checkin = this.props.info.checkin;
        var checkout = this.props.info.checkout;
        
        let hotelNodes = this.props.data.map((hotel) => {
            return (
                <HotelsIndv 
                    key={hotel.id}
                    id={hotel.id}
                    link={'#api/locations/' + city + '/hotels/' + hotel.id + '?checkin=' + checkin + '&checkout=' + checkout} 
                    photo={hotel.photos[0]['thumbnail']} 
                    name={hotel.name} rate={hotel.available ? '$' + (Number(hotel['nightly_rate']).toFixed(0)) : "Unavailable"}
                    hotelCallback={this.getHotel.bind(this)}
                />
            );
        });
                
        return (
            <div className="results">
            <div id='hotels' className={this.state.showHotel ? "hotelsHide" : ""}>{hotelNodes}</div>
            
            </div>
        );
    }   
}

export default HotelsList;