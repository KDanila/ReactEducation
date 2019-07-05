import React, {Component} from 'react';
import './App.css';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        sides: ['XXX', 'YYY']
    }

    constructor(props) {
        super(props);
        this.state = {
            currentSide: this.props.sideX,
            numXside: 0,
            numYside: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }


    returnSide(sides) {
        return sides[(Math.floor(Math.random() * this.props.length))];
    }

    handleClick() {
        let updateSide = this.returnSide(this.props.sides)
        this.setState(st => {
            return {
                currentSide: updateSide,
                numXside: st.numXside + updateSide === 'XXX' ? 1 : 0,
                numYside: st.numYside + updateSide === 'YYY' ? 1 : 0
            }
        });
    }

        render()
        {
            return (
                <div className="App">
                    <Coin side={this.state.currentSide}/>

                    <button onClick={this.handleClick}/>
                </div>
            );
        }
    }

    export
    default
    CoinFlipper;