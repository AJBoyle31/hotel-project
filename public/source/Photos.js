import React, {Component} from 'react';

//TO DO
    //picture sizes vary
    //add captions?

class Photos extends Component {
    constructor(){
        super();
        this.state = {
            slideIndex: 0
        };  
    }
    previousSlide(){
        var y = this.state.slideIndex - 1;
        if (y < 0){
            y = (this.props.pics.length - 1);
        }
        this.whichSlide(y);
    }
    nextSlide(){
        var x = this.state.slideIndex + 1;
        if (x > (this.props.pics.length - 1)){
            x = 0;
        }
        
        this.whichSlide(x);
        
    }
    whichSlide(n){
        this.setState({ slideIndex: n });
    }
    render(){
        
        return (
            <div className="pictures">
                <a className="btn-floating styleLeft" onClick={this.previousSlide.bind(this)}>&#10094;</a>
                
                {this.props.pics.map((photo, index) => (
                    <img className="slideShow" src={photo.url} key={photo.url} className={index == this.state.slideIndex ? "" : "hidePic"} />))}
                
                
                <a className="btn-floating styleRight" onClick={this.nextSlide.bind(this)} >&#10095;</a>
            </div>        
        );
    }
}

export default Photos;