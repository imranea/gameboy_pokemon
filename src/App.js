import React,{useEffect} from "react";
import "./styles.css";
import {connect} from "react-redux" 

import {showPokemon,capturePokemon} from "./store/action" 
import fetchPokemons from "./store/fetchPokemons"

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader"

const App = ({fetchPokemons,pending,showPokemon,pokemons,capturePokemon}) => {

  useEffect(()=>{
    fetchPokemons()
  },[fetchPokemons])
  
  if(pending){
    return <Loader></Loader>
  }
  console.log(pokemons)
  return (
    <div className="App">
      <GameBoy showPokemon={()=>showPokemon(pokemons)} capturePokemon={capturePokemon}/>
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({pending,pokemons,onScreen}) =>{ 
  return {
    pending,
    pokemons,
    onScreen
  };
};

const mapDispatchToProps = dispatch =>{ 
  return{
    fetchPokemons : () => dispatch(fetchPokemons()),
    showPokemon : pokemons => dispatch(showPokemon(pokemons)),
    capturePokemon : ()=> dispatch(capturePokemon())

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App); 
