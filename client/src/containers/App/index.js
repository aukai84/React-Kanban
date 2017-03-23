import React, { Component } from 'react';
import QueueDisplay from './QueueDisplay';
import ProgressDisplay from './ProgressDisplay';
// import DoneDisplay from './DoneDisplay';
import {requestHelper} from '../../lib/modules';
import logo from '../../logo.svg';
import './styles.css';
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
            this.setState({
                queueCards: cards.filter(card => {return card.status === "queue"}),
                inProgressCards: cards.filter(card => {return card.status === "in-progress"}),
                doneCards: cards.filter(card => {return card.status === "done"})
            })
       })
    }

    componentWillMount() {
        this.grabAllCards();
    }

    updateStatus = (endPoint) => {
        console.log(endPoint)
        requestHelper('PUT', endPoint)
        .then(result => {
            console.log("running function")
            this.grabAllCards();
        })
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <QueueDisplay cards={this.state.queueCards} updateStatus={this.updateStatus}/>
          <ProgressDisplay cards={this.state.inProgressCards} status={this.updateStatus}/>
      </div>
    );
  }
}

export default App;
