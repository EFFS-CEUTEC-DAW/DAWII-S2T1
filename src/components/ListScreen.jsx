import { useEffect } from 'react';
import pokemonList from '../hooks/pokemonList';
import { Link } from 'react-router-dom';

const ListScreen = () => {
  const [pokemons, loading, error] = pokemonList();

  useEffect(() => {
    if (error) {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <div>
      <h1>Listado Pokemón</h1>
      {loading ? ( <h3>Loading...</h3> ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListScreen;
