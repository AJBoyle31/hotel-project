var React = require('react');

var FilterOptions = React.createClass({
    render: function(){
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
});

module.exports = FilterOptions;