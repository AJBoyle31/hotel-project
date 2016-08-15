import React, {Component} from 'react';


class Stars extends Component {
    render(){
        var star = this.props.star;
        var bstar = \u2605;
        
        return (
            <div className="stars">
                <span>{1 <= star ? bstar : bstar }</span>
                <span>{2 <= star ? "&#9733" : "&#9734"}</span>
                <span>{3 <= star ? "&#9733" : "&#9734"}</span>
                <span>{4 <= star ? "&#9733" : "&#9734"}</span>
                <span>{5 <= star ? "&#9733" : "&#9734"}</span>
            </div>
        
        );
    }
}

export default Stars;