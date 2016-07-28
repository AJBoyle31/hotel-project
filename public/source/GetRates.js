var React = require('react');

//Get information from user regarding city, checkin and checkout dates. 
var GetRates = React.createClass({
    getInfo: function(event){
        event.preventDefault();
        var info = {
            city: this.refs.city.value,
            checkin: this.refs.checkin.value,
            checkout: this.refs.checkout.value
        };
        this.props.updateInfo(info);
        
    },
    render: function(){
        return (
            <div className="searchBox">
            <h3 className="searchHotels">Search Hotels</h3>
            <form ref="formRates" className="formRates" onSubmit={this.getInfo}>
                <label>City
                <select ref="city" id="city">
                    <option value='charlottesville'>Charlottesville</option>
                    <option value='newyork'>New York City</option>
                    <option value='chicago'>Chicago</option>
                </select>
                </label>
                <label>Check In
                <input type='text' ref='checkin' id='checkin' placeholder='YYYY-MM-DD' required />
                </label>
                <label>Check Out
                <input type='text' ref='checkout' id='checkout' placeholder='YYYY-MM-DD' required />
                </label>
                <input type="submit" value="Get Rates" />
            </form>
            
            </div>
        );
    }
});

module.exports = GetRates;