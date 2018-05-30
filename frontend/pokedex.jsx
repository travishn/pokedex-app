import React from 'react';
import ReactDOM from 'react-dom';
import { getAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  const store = configureStore();

  window.getAllPokemon = getAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.store = store;

  ReactDOM.render(<h1>Pokedex here</h1>, rootEl);



});
