import React, {Component} from 'react';

class QueueDisplay extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="queue-container">
                <h2>QUEUE</h2>
                    {this.props.cards.map(card => {
                        return <div className="queue-cards">
                            <p>{card.title}</p>
                            <p>Priority: {card.priority}</p>
                            <p>Assigned by: {card.created_by}</p>
                            <p>{card.assigned_to}</p>
                            <form onSubmit={this.props.updateStatus(`http://localhost:9000/api/kanban/in-progress/${card.id}`)}>
                                <input type='submit' value="begin task"/>
                            </form>
                        </div>
                    })}
            </div>
        )
    }
}

export default QueueDisplay;