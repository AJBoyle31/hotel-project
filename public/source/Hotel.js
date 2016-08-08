import React, {Component} from 'react';

class Hotel extends Component {
    render(){
        
        var photos = this.props.hotel.photos.map((photo) => {
            return <img className="slideShow" src={photo.url} />;
        });
        var amenities = this.props.hotel.amenities.map((item) => {
            return <p>item['name']</p>;
        });
        
        return (
            <div>
            
                <div className="picture">
                    {photos}
                    <a class="btn-floating" style="position:absolute;top:45%;left:0" onClick="plusDivs(-1)">&#10094;</a>
                    <a class="btn-floating" style="position:absolute;top:45%;right:0" onClick="plusDivs(+1)">&#10095;</a>
                </div>
                
                <div id="titlerating">
                    <div className="hotelTitle">
                        <h2 id="hotelname">{this.props.hotel.name}</h2>
                        <h5 id="address">{this.props.hotel.address["line1"]}, {this.props.hotel.address["city"]} {this.props.hotel.address["region_code"]} {this.props.hotel.address["postal_code"]}</h5>
                    </div>
                    <div className="stars" id={this.props.hotel.stars}>
                        <span id='a'>&#9734</span><span id='b'>&#9734</span><span id='c'>&#9734</span><span id='d'>&#9734</span><span id='e'>&#9734</span>
                    </div>
                </div>
                
                <br/>
                
                <div id="desc">
                    <h3 id="desctitle">Description</h3>
                    <p id="descinfo">{this.props.hotel.description > 675 ? this.props.hotel.description.slice(0, 675) : this.props.hotel.description}</p>
                </div>
                
                <div id="amenities">
                    <h3 id='amenitiestitle'>Amenities</h3>
                    <div id='list'>
                        {amenities}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Hotel;