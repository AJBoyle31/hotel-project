import React, {Component} from 'react';

class Cities extends Component {
    render(){
        return (
            <h3>{this.props.name}, {this.props.state}</h3>
        );
    }
}

export default Cities; 