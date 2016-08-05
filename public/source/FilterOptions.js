//do not use yet
import React, {Component} from 'react';

class FilterOptions extends Component {
    render(){
        return (
        <div className="filter">
        <form>
            <input type='text' ref='name' onChange={this.props.filterList} placeholder='Hotel Name Contains..' />
            <input type='text' ref='minprice' placeholder='Min Price' />
            <input type='text' ref='maxprice' placeholder='Max Price' />
            <input type='checkbox' ref='pet' name='amenities' value='pet' /> Pet Friendly
            <input type='checkbox' ref='wifi' name='amenities' value='wifi' /> Wifi
        </form>
        </div>
        );
    }
}


export default FilterOptions;