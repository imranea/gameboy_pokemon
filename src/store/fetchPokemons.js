import {fetchPokemonSuccess,fetchPokemonPending} from "./action" // fichier séparer où réalise la fonction souhaité et on appelle l'action

const numberOfPokemon = 2

const urls=[]

for(let i = 1; i<= numberOfPokemon;i++){
    urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

const requests = urls.map(url =>fetch(url))

export default () => {
    return dispatch =>{
        dispatch(fetchPokemonPending())
        Promise.all(requests) // ne passe pas à la suite tant que l'ensemble des requetes n'est pas réalisé une sorte de grand await
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(pokemons => pokemons.map(pokemon =>({
            id:pokemon.id,
            name:pokemon.name,
            captureRate: pokemon.capture_rate,
            isCatch : false,
            img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        })))
        .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)))
    }
}