import { getPokemonsDetails } from '../api';
import { types } from './types';

export const setPokemons = (payload) => ({
  type: types.SET_POKEMON,
  payload,
});

export const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: types.SET_FAVORITE,
  payload,
});

export const getPokemonswithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonsDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };
