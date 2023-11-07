import React from 'react'
import { useSelector,useDispatch } from 
'react-redux'
import { removeTodo } from '../Features/Todo/TodoSlice' 
function Todo() {
    const todos =  useSelector(state=>state.todos)
    const dispatch = useDispatch()
  return (
    <>
        {todos.map((todo)=>(
            <li key = {todo.id}>
                {todo.text} 
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
        ))}
    </>
  )
}

export default Todo