import { types } from './types';

export const setPokemons = (payload) => ({
  type: types.SET_POKEMON,
  payload,
});
