import React, {Component} from 'react';

var cityPics = {
    "Charlottesville": 'http://az616578.vo.msecnd.net/files/2016/03/19/635939924999229260-1043665980_1400-charlottesville-va-downtown.imgcache.rev1409086909867.web.jpg',
    "New York": "http://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline1536.jpg",
    "Chicago": "http://chicagoraffaello.com/wp-content/uploads/2013/08/chicago-skyline.jpg"
};

class Cities extends Component {
    render(){
        return (
            <div className="loc">
            <h3 className="cityTitle">{this.props.name}, {this.props.state}</h3>
            <img id="pic" src={cityPics[this.props.name]} />
            </div>
        );
    }
}

export default Cities; 