//do not use yet
import React, {Component} from 'react';

class FilterOptions extends Component {
    handleClickLow(){
            
    }
    handleClickHigh(){
        
    }
    render(){
        return (
        <div className="filter">
            <button onClick={this.handleClickLow}>Price Low to High</button>
            <button onClick={this.handleClickHigh}>Price High to Low</button>
        </div>
        );
    }
}


export default FilterOptions;