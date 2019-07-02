import React, {Component} from 'react';
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        sides:['one','two','three','four','five','six']
    }

    constructor(props) {
        super(props);
        this.state = {die1: 'one', die2: 'one'};
        this.roll = this.roll.bind(this);
    }
    roll(){
        let rand1 = Math.floor(Math.random()*this.props.sides.length);
        let rand2 = Math.floor(Math.random()*this.props.sides.length);
        this.setState({die1:this.props.sides[rand1], die2:this.props.sides[rand2]});
    }
    render() {
        return (
            <div>
                <Die face={this.state.die1}/>
                <Die face={this.state.die2}/>
                <button onClick={this.roll}> Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;