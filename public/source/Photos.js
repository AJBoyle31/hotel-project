import React, {Component} from 'react';

class Photos extends Component {
    constructor(){
        super();
        this.state = {
            slideIndex: 0
        };  
    }
    plusDivs(n){
        
    }

    render(){
        var photos = this.props.pics.map((photo, index) => {
            return <img className="slideShow" src={photo.url} key={photo.url} className={index == this.state.slideIndex ? "" : "hidePic"} />;
        });
        
        
        return (
            <div className="picture">
                <a className="btn-floating styleLeft">&#10094;</a>
                {photos}
                <a className="btn-floating styleRight">&#10095;</a>
            </div>        
        );
    }
}

export default Photos;