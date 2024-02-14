import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

const TodoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)
  console.log(todo)
  return (
    <>
      <h1>Todos - RTQ query</h1>
      <hr />
      <h4>IsLoading {isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <pre>
        {/* <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'done' : 'pending'} </strong>
              {todo.title}
            </li>
          ))}
        </ul> */}
      </pre>
      <button onClick={() => setTodoId(todoId + 1)}>Next</button>
      <button onClick={() => setTodoId(todoId - 1)}>Prev</button>
    </>
  )
}

export default TodoApp
