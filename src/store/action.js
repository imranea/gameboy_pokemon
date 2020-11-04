export const CLICK = "CLICK" 
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_PENDING = "FETCH_POKEMON_PENDING";
export const CAPTURE_POKEMON = "CAPTURE_POKEMON"
export const SHOW_POKEMON = "SHOW_POKEMON";

export const fetchPokemonSuccess = (pokemons) => ({
    type:FETCH_POKEMON_SUCCESS,
    pokemons
})

export const showPokemon = (pokemons) => {
    const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCatch)
    const max = filteredPokemons.length
    const random = Math.floor(Math.random()*max);
    const onScreen = filteredPokemons[random]
    return dispatch =>{
        dispatch({type:SHOW_POKEMON,onScreen})
    }
}

export const capturePokemon = () =>{
    console.log("catch")
    const random = Math.floor(Math.random()*255);
    return dispatch =>{
        dispatch({type:CAPTURE_POKEMON,random})
    };
}

export const fetchPokemonPending = () => ({
    type:FETCH_POKEMON_PENDING
})