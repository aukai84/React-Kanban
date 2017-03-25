import React, { Component } from 'react';
import QueueDisplay from './QueueDisplay';
import ProgressDisplay from './ProgressDisplay';
import DoneDisplay from './DoneDisplay';
import CreateCardForm from './CreateCard';
import {requestHelper} from '../../lib/modules';
import logo from '../../logo.svg';
import './styles.css';

import {addCard} from '../actions';
import {connect} from 'react-redux';
import {createStore} from 'redux';
import cards from '../reducers';
let store = createStore(cards);

class App extends Component {

    constructor(){
        super();
        this.state ={
            queueCards: [],
            inProgressCards: [],
            doneCards: []
        }
    }

    grabAllCards = () => {
       requestHelper('GET', 'http://localhost:9000/api/kanban/all')
       .then(cards => {
        console.log(cards)
        console.log(this.props.onAddCard)
            // this.setState({
            //     queueCards: cards.filter(card => {return card.status === "queue"}),
            //     inProgressCards: cards.filter(card => {return card.status === "in-progress"}),
            //     doneCards: cards.filter(card => {return card.status === "done"})
            // })
            cards.forEach(card => {
                console.log(card)
                console.log(this.props.onAddCard)
                this.props.onAddCard(card.title, card.priority, card.status, card.created_by, card.assigned_to);
            })
       })
    }

    componentWillMount() {
        this.grabAllCards();
    }

    updateStatus = (endPoint) => {
        requestHelper('PUT', endPoint)
        .then(result => {
            this.grabAllCards();
        })
    }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="component-container">
          <QueueDisplay className="queue-display" cards={this.state.queueCards} updateStatus={this.updateStatus}/>
          <ProgressDisplay className="progress-display" cards={this.state.inProgressCards} updateStatus={this.updateStatus}/>
          <DoneDisplay className="done-display" cards={this.state.doneCards} updateStatus={this.updateStatus}/>
          <CreateCardForm grabAllCards={this.grabAllCards}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCard: (title, priority, status, created_by, assigned_to) => {
            dispatch(addCard(title, priority, status, created_by, assigned_to));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
