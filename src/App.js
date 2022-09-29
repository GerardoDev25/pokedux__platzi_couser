import { useEffect, useState } from 'react';
import { Col } from 'antd';

import './App.css';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';

import logo from './assets/logo.svg';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

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
