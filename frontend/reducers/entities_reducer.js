import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer //gives us back the state which is an object
});

export default entitiesReducer;
