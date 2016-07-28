var React = require('react');
var Hotels = require('./Hotels');
var FilterOptions = require('./FilterOptions');

var FilteredHotels = React.createClass({
    filterHotels: function(event){
        var updatedHotels = this.state.hotelsResult;
        updatedHotels = updatedHotels.filter(function(text){
            return text.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ filteredHotels: updatedHotels });
    },
    getInitialState: function(){
        return {
            hotelsResult: this.props.data,
            filteredHotels: []
        };
    },
    render: function(){
        var hotelNodes = this.props.data.map(function(hotel){
            if (hotel.available) {
                var rate = '$' + (Number(hotel['nightly_rate']).toFixed(0));
            } else {
                var rate = "Unavailable"; 
            }
            return (
                <Hotels photo={hotel.photos[0]['thumbnail']} name={hotel.name} rate={rate} />
            );
        });
       
        return (
            <div className="results">
            <FilterOptions filterList={this.filterList} />
            <div id='hotels'>{hotelNodes}</div>
            </div>
        );
    }
});

module.exports = FilteredHotels;