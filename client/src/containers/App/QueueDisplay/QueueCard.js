import React, {Component} from 'react';

class QueueCard extends Component {
    constructor(props){
        super(props);
    }

    changeToProgress = () => {
        this.props.updateStatus(`http://localhost:9000/api/kanban/in-progress/${this.props.card.id}`);
    }

    changeToDone = () => {
        this.props.updateStatus(`http://localhost:9000/api/kanban/done/${this.props.card.id}`);
    }

    render(){
        return (
            <div className="queue-cards">
                <p>{this.props.card.title}</p>
                <p>Priority: {this.props.card.priority}</p>
                <p>Assigned By: {this.props.card.created_by}</p>
                <p>Assigned To:: {this.props.card.assigned_to}</p>
                <button onClick={this.changeToProgress}>change to progress</button>
                <button onClick={this.changeToDone}>change to done</button>
            </div>
        )
    }
}

export default QueueCard;