import React, {Component} from 'react';
import HotelsIndv from './HotelsIndv';
import FilterOptions from './FilterOptions';

//'https://hotel-project-ajboyle.c9users.io/api/locations/' + city + '/hotels/' + hotel.id + '?checkin=' + checkin + '&checkout=' + checkout


class HotelsList extends Component {
   
    render(){
        var city = this.props.info.city;
        var checkin = this.props.info.checkin;
        var checkout = this.props.info.checkout;
        
        let hotelNodes = this.props.data.map((hotel) => {
            return (
                <HotelsIndv 
                    key={hotel.id} 
                    link={'#api/locations/' + city + '/hotels/' + hotel.id + '?checkin=' + checkin + '&checkout=' + checkout} 
                    photo={hotel.photos[0]['thumbnail']} 
                    name={hotel.name} rate={hotel.available ? '$' + (Number(hotel['nightly_rate']).toFixed(0)) : "Unavailable"}
                />
            );
        });
        return (
            <div className="results">
            <div id='hotels'>{hotelNodes}</div>
            </div>
        );
    }   
}

export default HotelsList;
/*


        
*/