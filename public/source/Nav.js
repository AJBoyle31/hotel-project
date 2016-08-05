import React, {Component} from 'react';
import GetRates from './GetRates';
import Contact from './Contact';
import Cities from './Cities';

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            showCities: false,
            showSearch: true,
            showContact: false
        };
    }
    toggleCities(){
        this.setState({
            showCities: true,
            showSearch: false,
            showContact: false
        });
    }
    toggleSearch(){
        this.setState({
            showCities: false,
            showSearch: true,
            showContact: false
        });
    }
    toggleContact(){
        this.setState({
            showCities: false,
            showSearch: false,
            showContact: true
        });
    }
    render(){
        var homepage = '';
        if (this.state.showCities) {
            homepage = <Cities />;
        }
        else if (this.state.showContact){
            homepage = <Contact />;
        }
        else { homepage = <GetRates /> }
        
        return (
            <div className='navsearch'>
            <nav className='nav navbar'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav navbar'>
                        <li className='navlinks'><a href='/'>Home</a></li>
                        <li className='navlinks'><a href='#cities' id='cities' onClick={this.toggleCities.bind(this)} >Cities We Represent</a></li>
                        <li className='navlinks'><a href='#search' id='search' onClick={this.toggleSearch.bind(this)} >Search Hotels</a></li>
                        <li className='navlinks'><a href='#contact' id='contact' onClick={this.toggleContact.bind(this)} >Contact Us</a></li>
                    </ul>
                </div>
            </div>        
        </nav> 
        
        {homepage}
        
        </div>
        );
    }
}


export default Nav;