import {CLICK, FETCH_POKEMON_SUCCESS,FETCH_POKEMON_PENDING,SHOW_POKEMON,CAPTURE_POKEMON} from "./action" // récupérer le click de action
import catchPokemon from "./catchPokemon"

// Creation de la fonction reducer
const reducer = (state,action) =>{
    switch(action.type){
        case CLICK:
            return {
                ...state, //On recopie le state
                click: state.click+1
        }
        case FETCH_POKEMON_SUCCESS:{
            return{
                ...state,
                pokemons: action.pokemons,
                pending:false
            }
        }
        case FETCH_POKEMON_PENDING:{
            return{
                ...state,
                pending: true
            }
        }
        case SHOW_POKEMON:{
            return{
                ...state,
                onScreen : action.onScreen
            }
        }
        case CAPTURE_POKEMON:{
            return{
                ...state,
                pokemons: catchPokemon(state.pokemons,state.onScreen,action.random)
            }
        }
        default:
            return state;

    }
};

export default reducer;