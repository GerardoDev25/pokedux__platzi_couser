import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import App from './App';

import './index.css';
import { logger } from './middlewares';
import { pokemonsReducer } from './reducer/pokemons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
