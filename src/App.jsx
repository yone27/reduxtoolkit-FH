import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter'
import PokemonApp from './PokemonApp'
import TodoApp from './TodoApp'

const App = () => {
  const [input, setInput] = useState('')
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let payload = parseInt(input)
    dispatch(incrementByAmount(payload))
  }
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <p>count is: {counter}</p>
      <form onSubmit={handleSubmit}>
        <input
          type='numer'
          placeholder='escribe la acantidad'
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <TodoApp />
    </div>
  )
}

export default App
