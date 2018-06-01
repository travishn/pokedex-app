import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  const {pokemon} = props;

  return(
    <div>
      <li><Link to="/pokemon/:pokemonId">{pokemon.name}</Link></li>
      <img src={pokemon.image_url} />
    </div>
  );
};
