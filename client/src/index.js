import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cards from './containers/reducers'
let store = createStore(cards);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
