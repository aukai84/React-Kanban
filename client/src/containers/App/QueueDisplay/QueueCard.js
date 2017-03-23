import React, {Component} from 'react';

class QueueCard extends Component {
    constructor(props){
        super(props);
    }

    changeToProgress = () => {
        console.log('sanity')
        this.props.updateStatus(`http://localhost:9000/api/kanban/in-progress/${this.props.card.id}`);
    }

    render(){
        console.log(this.props.card.id)
        return (
            <div className="queue-cards">
                <p>{this.props.card.title}</p>
                <p>Priority: {this.props.card.priority}</p>
                <p>Assigned By: {this.props.card.created_by}</p>
                <p>Assigned To:: {this.props.card.assigned_to}</p>
                <button onClick={this.changeToProgress}>change to progress</button>
            </div>
        )
    }
}

export default QueueCard;