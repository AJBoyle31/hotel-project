import React, {Component} from 'react';


class Stars extends Component {
    render(){
        var star = this.props.star;
        var black = "★";
        var white = "☆";        
        
        return (
            <div className="stars">
                <span>{1 <= star ? black : white}</span>
                <span>{2 <= star ? black : white}</span>
                <span>{3 <= star ? black : white}</span>
                <span>{4 <= star ? black : white}</span>
                <span>{5 <= star ? black : white}</span>
            </div>
        
        );
    }
}

export default Stars;