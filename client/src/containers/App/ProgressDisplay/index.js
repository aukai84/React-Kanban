import React, {Component} from 'react';

class ProgressDisplay extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="progress-container">
                <h2>IN PROGRESS</h2>
                    {this.props.cards.map(card => {
                        return <div className="progress-cards">
                            <p>{card.title}</p>
                            <p>Priority: {card.priority}</p>
                            <p>Assigned by: {card.created_by}</p>
                            <p>{card.assigned_to}</p>
                            <form onSubmit={this.props.status(`http://localhost:9000/api/kanban/queue/${card.id}`)}>
                                <input type='submit' value="queue task"/>
                            </form>
                        </div>
                    })}
            </div>
        )
    }
}

export default ProgressDisplay;