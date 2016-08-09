import React, {Component} from 'react';

var slideIndex = 1;

class Photos extends Component {
    plusDivs(n){
        this.showDivs(slideIndex =+ n);
    }
    showDivs(n){
        var i;
        var x = this.props.pics;
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) {slideIndex = x.length}
        //for (i=0; i < x.length; i++){
        //    x[i].style.display = "none";
        //}
        //x[slideIndex - 1].style.display = "block";
    }
    render(){
        var photos = this.props.pics.map((photo) => {
            return <img className="slideShow" src={photo.url} key={photo.url} />;
        });
        
        var styleLeft = {
            position: "absolute",
            top: '45%',
            left: 0
        };
        var styleRight = {
            position: "absolute",
            top: '45%',
            right: 0
        };
        
        
        return (
            <div className="picture">
                {photos}
                <a className="btn-floating" style={styleLeft} onClick={this.plusDivs(-1)}>&#10094;</a>
                <a className="btn-floating" style={styleRight} onClick={this.plusDivs(+1)}>&#10095;</a>
            </div>        
        );
    }
}

export default Photos;