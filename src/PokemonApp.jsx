import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemon)
  console.log(pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading : {isLoading ? 'true' : 'false'}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page + 1))}>Next</button>
    </>
  )
}

export default PokemonApp
