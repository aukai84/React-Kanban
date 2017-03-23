import React, {Component} from 'react';
import QueueCard from './QueueCard.js';

class QueueDisplay extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="queue-container">
                <h2>QUEUE</h2>
                    {this.props.cards.map(card => {
                        return <QueueCard card={card} updateStatus={this.props.updateStatus}/>
                    })}
            </div>
        )
    }
}

export default QueueDisplay;