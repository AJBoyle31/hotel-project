import React, {Component} from 'react';
import HotelsIndv from './HotelsIndv';
import FilterOptions from './FilterOptions';

class HotelsList extends Component {
    render(){
        let hotelNodes = this.props.data.map((hotel) => {
            if (hotel.available) {
                var rate = '$' + (Number(hotel['nightly_rate']).toFixed(0));
            } else {
                var rate = "Unavailable"; 
            }
            return (
                <HotelsIndv key={hotel.id} photo={hotel.photos[0]['thumbnail']} name={hotel.name} rate={rate} />
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