import React, { Component } from 'react';
import QueueDisplay from './QueueDisplay';
import ProgressDisplay from './ProgressDisplay';
import DoneDisplay from './DoneDisplay';
import CreateCardForm from './CreateCard';
import {requestHelper} from '../../lib/modules';
import logo from '../../logo.svg';
import './styles.css';

import {addCard, updateStatus, deleteCard} from '../actions';
import {connect} from 'react-redux';

class App extends Component {

    constructor(){
        super();

    }

    grabAllCards = () => {
       requestHelper('GET', 'http://localhost:9000/api/kanban/all')
       .then(cards => {
            cards.map(card => {
                this.props.onAddCard(card.id, card.title, card.priority, card.status, card.created_by, card.assigned_to);
            })
       })
    }

    componentWillMount() {
        this.grabAllCards();
    }

    updateStatus = (endPoint) => {
        requestHelper('PUT', endPoint)
        .then(card => {
            this.props.onUpdateStatus(card.id, card.status);
        });
    };

    deleteCard = (endPoint) => {
        requestHelper('DELETE', endPoint)
        .then(card => {
            this.props.onDeleteCard(card.id);
        });
    };

    filterQueue = () => {
        return this.props.cards.filter(card => {
            return card.status === 'queue';
        })
    };

    filterProgress = () => {
        return this.props.cards.filter(card => {
            return card.status === 'in-progress';
        })
    }

    filterDone = () => {
        return this.props.cards.filter(card => {
            return card.status === 'done';
        })
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CreateCardForm onAddCard={this.props.onAddCard}/>
        <div className="component-container">
          <QueueDisplay className="queue-display" cards={this.filterQueue()} updateStatus={this.updateStatus} deleteCard={this.deleteCard}/>
          <ProgressDisplay className="progress-display" cards={this.filterProgress()} updateStatus={this.updateStatus} deleteCard={this.deleteCard}/>
          <DoneDisplay className="done-display" cards={this.filterDone()} updateStatus={this.updateStatus} deleteCard={this.deleteCard}/>
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
        onAddCard: (id, title, priority, status, created_by, assigned_to) => {
            dispatch(addCard(id, title, priority, status, created_by, assigned_to));
        },
        onUpdateStatus: (id, status) => {
            dispatch(updateStatus(id, status));
        },
        onDeleteCard: (id) => {
            dispatch(deleteCard(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
