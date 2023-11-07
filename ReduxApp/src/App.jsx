import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
 

  return (
  <>
  <h1>This is my first Redux Todo App</h1>
  <AddTodo/>
  <Todo/>
  </>
  )
}

export default App
