import React, {Component} from 'react';


class Amenities extends Component {
    render(){
        var amenities = this.props.amenity.map((item) => {
            return <p>{item['name']}</p>;
        });
        return (
            <div id="amenities">
                    <h3 id='amenitiesTitle'>Amenities</h3>
                    <div id='amenitiesList'>
                        {amenities}
                    </div>
                </div>
        );
    }
}

export default Amenities;