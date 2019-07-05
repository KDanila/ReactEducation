import React, {Component} from 'react';
import './App.css';

class Coin extends Component {

    render(){
        return(
            <div className="App">
                {this.props.side}
            </div>
        );
    }
}

export default Coin;