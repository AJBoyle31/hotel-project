import React, {Component} from 'react';

class Address extends Component {
    render(){
        return (
            <h5 id="address">{this.props.address.line1}, {this.props.address.city} {this.props.hotel.address.region_code} {this.props.hotel.address.postal_code}</h5>
        );
    }
}

export default Address;