import React, {Component} from 'react';
import Cities from './Cities';

const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations';
const API_HEADERS = {
    'Content-Type': 'application/json'
};


class CitiesList extends Component {
    constructor(){
        super();
        this.state = {
            cities: []
        };
    }
    componentDidMount(){
        fetch(API_URL, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cities: responseData });
        });
    }
    render(){
        let cityData = this.state.cities.map((city) => {
            return (
                <Cities key={city.name} name={city.name} state={city.region_code} />
            );
        });
        return (
            <div id="location">
                {cityData}
            </div>
        );
    }
}

export default CitiesList; 