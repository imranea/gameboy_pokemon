import React,{useEffect} from "react";
import "./styles.css";
import {connect} from "react-redux" // pour la connexion avec un élément

import {CLICK,showPokemon,capturePokemon} from "./store/action" 
import fetchPokemons from "./store/fetchPokemons" // importer pour utiliser la fonction

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader"

const App = ({handleClick,fetchPokemons,pending,showPokemon,pokemons,capturePokemon}) => {

  useEffect(()=>{
    fetchPokemons()
  },[fetchPokemons])
  
  if(pending){
    return <Loader></Loader>
  }

  return (
    <div className="App">
      <button
        onClick={()=> handleClick()}
      >
        click
      </button>
      <GameBoy showPokemon={()=>showPokemon(pokemons)} capturePokemon={capturePokemon}/>
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({pending,pokemons,onScreen}) =>{ // norme de nomage , on recupere le state click
  return {
    pending,
    pokemons,
    onScreen
  };
};

const mapDispatchToProps = dispatch =>{ // récuperer ce qui a dans le store et l'utiliser dans la view
  return{
    fetchPokemons : () => dispatch(fetchPokemons()),
    handleClick : () => dispatch({type: CLICK }),
    showPokemon : pokemons => dispatch(showPokemon(pokemons)),
    capturePokemon : ()=> dispatch(capturePokemon())

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App); // connexion à App
