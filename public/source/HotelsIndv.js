import React, {Component} from 'react';


class HotelsIndv extends Component {
    
    render(){
        return (
            <div className="hotels">
            <a href={this.props.link} >
            <img src={this.props.photo} />
            <h3 className='hotelname'>{this.props.name.length > 20 ? this.props.name.slice(0,20) + '...' : this.props.name}</h3>
            <h3 className='hotelrate'>{this.props.rate}</h3>
            </a>
            </div>
        );
    }
}

export default HotelsIndv;