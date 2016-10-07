//do not use yet
import React, {Component} from 'react';

class FilterOptions extends Component {
    handleClickLow(){
        this.props.taskCallbacks.sortPriceLow.bind(this);  
    }
    handleClickHigh(){
        
    }
    render(){
        return (
        <div className="filter">
            <button onClick={this.handleClickLow.bind(this)}>Price Low to High</button>
            <button onClick={this.handleClickHigh}>Price High to Low</button>
        </div>
        );
    }
}


export default FilterOptions;