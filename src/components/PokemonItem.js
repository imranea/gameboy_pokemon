import React from "react";

const PokemonItem = ({pokemon}) => {
  const imgSrc = pokemon.isCatch? 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/items/poke-ball.png': pokemon.img
  return (
    <li className="pokemon-item">
      <img
        alt={"ditto"}
        src={imgSrc}
      />
      {pokemon.name}
    </li>
  );
};



export default PokemonItem;
