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
        for (i=0; i < x.length; i++){
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }
    render(){
        var photos = this.props.pics.map((photo) => {
            return <img className="slideShow" src={photo.url} />;
        });
        
        return (
            <div className="picture">
                {photos}
                <a class="btn-floating" style="position:absolute;top:45%;left:0" onClick={this.plusDivs(-1).bind(this)}>&#10094;</a>
                <a class="btn-floating" style="position:absolute;top:45%;right:0" onClick={this.plusDivs(+1).bind(this)}>&#10095;</a>
            </div>        
        );
    }
}

export default Photos;