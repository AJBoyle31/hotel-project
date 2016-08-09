import React, {Component} from 'react';


class Stars extends Component {
    render(){
        var star = this.props.star;
        var starsResult;
        for(var m = 0; m < 6; m++){
            if (m <= star){ starsResult += <span>&#9733</span>}
            if (m > star){ starsResult += <span>&#9734</span>}
        }
        
        
        return (
            <div className="stars">
                {starsResult}
            </div>
        
        );
    }
}

export default Stars;