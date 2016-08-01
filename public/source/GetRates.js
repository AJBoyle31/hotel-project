var React = require('react');

//Get information from user regarding city, checkin and checkout dates. 
var GetRates = React.createClass({
    getInfo: function(event){
        var info = {
            city: event.target.city.value,
            checkin: event.target.checkin.value,
            checkout: event.target.checkout.value
        };
        this.props.updateInfo(info);
        event.preventDefault();
    },
    render: function(){
        return (
            <div className="searchBox">
            <h3 className="searchHotels">Search Hotels</h3>
            <form ref="formRates" className="formRates" onSubmit={this.getInfo}>
                <label>City
                <select name="city" id="city">
                    <option value='charlottesville'>Charlottesville</option>
                    <option value='newyork'>New York City</option>
                    <option value='chicago'>Chicago</option>
                </select>
                </label>
                <label>Check In
                <input type='text' name='checkin' id='checkin' placeholder='YYYY-MM-DD' required />
                </label>
                <label>Check Out
                <input type='text' name='checkout' id='checkout' placeholder='YYYY-MM-DD' required />
                </label>
                <button type="submit">Get Rates</button>
            </form>
            
            </div>
        );
    }
});

module.exports = GetRates;