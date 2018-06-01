import React from 'react';
import ReactDOM from 'react-dom';
import { getAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, requestOnePokemon, receiveOnePokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  const store = configureStore();

  window.getAllPokemon = getAllPokemon;

  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  window.receiveOnePokemon = receiveOnePokemon;
  window.requestOnePokemon = requestOnePokemon;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store}/>, rootEl);



});
