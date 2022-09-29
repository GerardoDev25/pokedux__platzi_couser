import { types } from '../actions/types';

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POKEMON:
      // return { ...state, pokemons: [...state.pokemons, action.payload] };
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
