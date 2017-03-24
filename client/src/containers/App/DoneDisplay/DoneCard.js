import React, {Component} from 'react';

class DoneCard extends Component {
    constructor(props){
        super(props);
    }
    changeToQueue = () => {
        this.props.updateStatus(`http://localhost:9000/api/kanban/queue/${this.props.card.id}`);
    }

    render(){
        return (
            <div className="done-cards">
                <p>{this.props.card.title}</p>
                <p>Priority: {this.props.card.priority}</p>
                <p>Assigned By: {this.props.card.created_by}</p>
                <p>Assigned To:: {this.props.card.assigned_to}</p>
                <button onClick={this.changeToQueue}>move to queue</button>
            </div>
        )
    }
}

export default DoneCard;