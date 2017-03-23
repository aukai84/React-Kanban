import React, {Component} from 'react';
import ProgressCard from'./ProgressCard.js';

class ProgressDisplay extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div id="progress-container">
                <h2>IN PROGRESS</h2>
                    {this.props.cards.map(card => {
                        return <ProgressCard card={card} updateStatus={this.props.status}/>
                    })}
            </div>
        )
    }
}

export default ProgressDisplay;