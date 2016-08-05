import React, {Component} from 'react';


class HotelsIndv extends Component {
    render(){
        return (
            <div className="hotels">
            <a href='#'>
            <img src={this.props.photo} />
            <h3 className='hotelname'>{this.props.name}</h3>
            <h3 className='hotelrate'>{this.props.rate}</h3>
            </a>
            </div>
        );
    }
}

export default HotelsIndv;