import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  return(
    <li>
      <Link className="pokemon-button" to={`/pokemon/${pokemon.id}`}>
        <img src={pokemon.image_url}/>
        <p>{pokemon.name}</p>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;