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
//http://localhost:9696/api/locations/ charlottesville /hotels/ 0ZEzgGG4W04s8EP05g9krVMw ?checkin= 2015-05-02 &checkout= 2015-05-04


class HotelsList extends Component {
    constructor(){
        super();
        this.state = {
            hotel: [],
            showHotel: false
        };
    }
    getHotel(hotelId){
        fetch(API_URL + this.props.info.city + "/hotels/" + hotelId + "?checkin=" + this.props.info.checkin + "&checkout=" + this.props.info.checkout, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ 
                hotel: <Hotel hotel={responseData} />, 
                showHotel: true
            });
        })
        .catch((error) => {
            
            console.log('Error fetching and parsing data hotel ' + hotelId , error);
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
            {this.state.hotel}
            </div>
        );
    }   
}

export default HotelsList;