import React, {Component} from 'react';
import HotelsIndv from './HotelsIndv';
import FilterOptions from './FilterOptions';
import Hotel from './Hotel';
import 'whatwg-fetch';

//'https://hotel-project-ajboyle.c9users.io/api/locations/' + city + '/hotels/' + hotel.id + '?checkin=' + checkin + '&checkout=' + checkout
//http://localhost:9696/api/locations/ charlottesville /hotels/ 0ZEzgGG4W04s8EP05g9krVMw ?checkin= 2015-05-02 &checkout= 2015-05-04


class HotelsList extends Component {
    
    render(){
        var city = this.props.hotelData.city;
        var checkin = this.props.hotelData.checkin;
        var checkout = this.props.hotelData.checkout;
        
        let hotelNodes = this.props.hotelData.hotelsSearch.map((hotel) => {
            return (
                <HotelsIndv 
                    key={hotel.id}
                    id={hotel.id}
                    link={'#api/locations/' + city + '/hotels/' + hotel.id + '?checkin=' + checkin + '&checkout=' + checkout} 
                    photo={hotel.photos[0]['thumbnail']} 
                    name={hotel.name} rate={hotel.available ? '$' + (Number(hotel['nightly_rate']).toFixed(0)) : "Unavailable"}
                    taskCallbacks={this.props.taskCallbacks}
                    hotelData={this.props.hotelData}
                />
            );
        });
        
        
        let singleHotel = <Hotel hotel={this.props.hotelData.hotel} />;
        
        
                
        return (
            <div className="results">
            <div id='hotels'>{hotelNodes}</div>
            
            </div>
        );
    }   
}

export default HotelsList;