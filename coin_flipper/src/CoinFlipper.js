import React, {Component} from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        sides: ['XXX', 'YYY']
    }
    constructor(props){
        super(props);
        this.state = {
            currentSide : this.props.sideX,
            numXside: 0,
            numYside:0
        }
    }



    randSide(){
        return (Math.floor(Math.random()*this.props.length));
    }
//TODO!
    handleClick(){
        this.setState({currentSide : this.props.sides[this.randSide()]});
    }

    render() {
        return (
            <div>
                <Coin side={this.state.currentSide}/>
                XXXXXXXXXXXXXXXXXXXX
                <button onClick={this.handleClick}/>
            </div>
        );
    }
}

export default CoinFlipper;