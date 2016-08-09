import React, {Component} from 'react';

class Address extends Component {
    render(){
        return (
            <h5 id="address">{this.props.address.line1}, {this.props.address.city} {this.props.address.region_code} {this.props.address.postal_code}</h5>
        );
    }
}

export default Address;