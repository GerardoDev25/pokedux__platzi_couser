import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col } from 'antd';

import './App.css';
import logo from './assets/logo.svg';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { setPokemons } from './actions/action';

function App() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(setPokemons(pokemonsRes));
    };

    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedox" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
export default App;
