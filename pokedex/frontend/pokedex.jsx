import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as APIUtil from './util/api_util';
// import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
});

