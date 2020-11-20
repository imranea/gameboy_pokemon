import React from "react";
import {connect} from "react-redux"

const Screen = ({onScreen,pokemons}) => {
  const finish = pokemons.filter(pokemon=>!pokemon.isCatch)
  console.log(finish.length)
  if(onScreen.id && finish.length !==0){
    if(pokemons[onScreen.id-1].isCatch){
      return(
        <>
        <img alt={onScreen.name} src="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/items/poke-ball.png"/>
        </>
      )
    }
    return(
    <>
      <h3>{onScreen.name}</h3>
      <img alt={onScreen.name} src={onScreen.img}/>
    </>
    );
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  );
};

const mapStateToProps = ({onScreen,pokemons}) =>{ 
  return {
    onScreen,
    pokemons
  };
};

export default connect(mapStateToProps)(Screen);
