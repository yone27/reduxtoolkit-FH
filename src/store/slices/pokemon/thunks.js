import { pokemonApi } from '../../../api/pokemonsApi'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    const { data } = await pokemonApi(`/pokemon?limit=10&offset= ${page * 10}`)

    dispatch(setPokemons({ pokemons: data.results, page }))
  }
}
