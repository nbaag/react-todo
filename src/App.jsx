import { useState } from 'react'
import TodoItem from './components/TodoItem'

const todos = [
  { id: 123, title: "JavaScript", isComplite: false},
  { id: 213, title: "Vue", isComplite: false},
  { id: 321, title: "React", isComplite: false},
]

const App = () => {
  return (
  <div>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </div>
  )
}

export default App
