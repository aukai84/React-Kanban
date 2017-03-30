import React, {Component} from 'react';
import DoneCard from'./DoneCard.js';

class DoneDisplay extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div id="done-container">
                <h2>Done</h2>
                    {this.props.cards.map(card => {
                        return <DoneCard card={card} updateStatus={this.props.updateStatus} deleteCard={this.props.deleteCard}/>
                    })}
            </div>
        )
    }
}

export default DoneDisplay;