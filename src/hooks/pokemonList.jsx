import { useState, useEffect } from 'react';
import axios from 'axios';

const pokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
        setPokemons(response.data.results);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, []);

  return [pokemons, loading, error];
};

export default pokemonList;
