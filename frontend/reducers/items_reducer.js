import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      let items = action.payload.items;
      return merge({}, state, items);
    default:
      return state;
  }
};

export default itemReducer;
