import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import 'whatwg-fetch';


//const API_URL = 'https://hotel-project-ajboyle.c9users.io/api/locations/';
const API_URL = 'https://ajbhotelpage.herokuapp.com/api/locations/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

class App extends Component {
    constructor(){
        super();
        this.getHotelsSearch = this.getHotelsSearch.bind(this);
        this.getHotel = this.getHotel.bind(this);
        this.clearHotel = this.clearHotel.bind(this);
        this.clearHotelsSearch = this.clearHotelsSearch.bind(this);
        
        this.state = {
            hotel: [],
            hotelsSearch: [],
            city: "",
            checkin: "",
            checkout: "",
            showHotel: false
        };
        
    }
    getHotelsSearch(city, checkin, checkout){
        let urlRemainder = city + '/hotels?checkin=' + checkin + '&checkout=' + checkout;
        
        fetch(API_URL + urlRemainder, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ 
                hotelsSearch: responseData, 
                city: city,
                checkin: checkin,
                checkout: checkout,
                
            });
        })
        .catch((error) => {
            console.log('Error fetching and parsing data hotels', error);
        });
    }
    getHotel(hotelId){
        fetch(API_URL + this.state.city + "/hotels/" + hotelId + "?checkin=" + this.state.checkin + "&checkout=" + this.state.checkout, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ 
                hotel: responseData,
                showHotel: true
            });
        })
        .catch((error) => {
            
            console.log('Error fetching and parsing data hotel ', error);
        });
    }
    sortPriceLow(){
        
    }
    clearHotel(){
        this.setState({
            hotel: []
        });
    }
    clearHotelsSearch(){
        this.setState({
            hotelsSearch: []
        });
    }
    render(){
        return(
            <div id="pageContainer">
                <h1 className="title">HotelsLite.com</h1>
                <h3 className="subtitle">The Limited Choice in Hotels!</h3>
                
                <Nav taskCallbacks={{
                    getHotel: this.getHotel,
                    getHotelsSearch: this.getHotelsSearch,
                    clearHotel: this.clearHotel,
                    clearHotelsSearch: this.clearHotelsSearch }} 
                    
                    hotelData={{
                        hotel: this.state.hotel,
                        hotelsSearch: this.state.hotelsSearch,
                        city: this.state.city,
                        checkin: this.state.checkin,
                        checkout: this.state.checkout,
                        showHotel: this.state.showHotel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    }}    
                />
                
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById("app"));