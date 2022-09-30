import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import App from './App';

import './index.css';
import { logger } from './middlewares';
import { pokemonsReducer } from './reducer/pokemons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnthancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);

const store = createStore(pokemonsReducer, composedEnthancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
