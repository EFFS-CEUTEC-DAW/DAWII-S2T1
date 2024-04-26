import { useState, useEffect } from 'react';
import axios from 'axios';

const pokemonDetail = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (
) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        setPokemon(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, [id]);

  return [pokemon, loading, error];
};

export default pokemonDetail;
