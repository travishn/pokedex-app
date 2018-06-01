import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemReducer from './items_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer, //gives us back the state which is an object
  items: itemReducer
});

export default entitiesReducer;
