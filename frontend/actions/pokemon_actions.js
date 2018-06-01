import * as APIUtil from '../util/api_util';
// import { getAllPokemon } from '../util/api_util';


export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = (pokemons) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const receiveOnePokemon = (payload) => ({
  type: RECEIVE_ONE_POKEMON,
  payload
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.getAllPokemon().then(pokemons => dispatch(receiveAllPokemon(pokemons)))
);

export const requestOnePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id).then(payload => dispatch(receiveOnePokemon(payload)))
);
