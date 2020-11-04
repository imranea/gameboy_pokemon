export default (pokemons,onScreen,random) =>{
    const tabPokemon= pokemons.map(pokemon =>{
        if(pokemon.id === onScreen.id){
            const isCaught = pokemon.captureRate + random
            if(isCaught>=250){
                return {...pokemon,isCatch:true}
            }
            return pokemon
        }
        return pokemon
    });
    return tabPokemon
}
