import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Spin } from 'antd';

import './App.css';
import logo from './assets/logo.svg';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { getPokemonswithDetails, setLoading } from './actions/action';

function App() {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((state) => state);

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const PokemonList = await getPokemon();
      dispatch(getPokemonswithDetails(PokemonList));
      dispatch(setLoading(false));
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

      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}
export default App;
