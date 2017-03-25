import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import books from './containers/reducers'
let store = createStore(books);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
