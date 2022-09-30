import { types } from '../actions/types';

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POKEMON:
      return { ...state, pokemons: action.payload };

    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
