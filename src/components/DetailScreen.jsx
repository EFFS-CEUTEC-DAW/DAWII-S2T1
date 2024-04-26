import React, { useState, useEffect } from 'react';

import pokemonDetail from '../hooks/pokemonDetail';

// eslint-disable-next-line react/prop-types
const DetailScreen = ({ id }) => {
  // eslint-disable-next-line react/prop-types
  const [pokemon, loading, error] = pokemonDetail(id);

  useEffect(() => {
    if (error) {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <div>
      <h1>Detalle Pokemón</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name} (#{pokemon.id})</h2>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default DetailScreen;
