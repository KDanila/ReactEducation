import React, {Component} from "react";
import './die.css'

class Die extends Component{
    render(){
        return(
            <div>
                <i className={`Die fas fa-dice-${this.props.face}`} />
                <i className='Die fas fa-dice-five'/>
            </div>
        );
    }
}
export default Die;