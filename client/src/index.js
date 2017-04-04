import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {createDevTools} from 'redux-devtools';
import {Provider} from 'react-redux';
import cards from './reducers'
let store = createStore(cards, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ReduxThunk));

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


ReactDOM.render(
<Provider store={store}>
    <Router>
        <div>
            <Route exact path='/' component={App} />
        </div>
    </Router>
</Provider>,
  document.getElementById('root')
);
