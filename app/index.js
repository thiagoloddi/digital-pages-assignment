import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './reducers';

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
, document.getElementById('app-container'));