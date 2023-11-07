import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../Features/Todo/TodoSlice"
function AddTodo() {

    const [input,setInput] =  useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
      e.preventDefault()
      dispatch(addTodo(input)) 
      setInput("")
    }
  return (
   <form onSubmit={addTodoHandler}>
     <input type="text"
     placeholder='Enter Todo Here...'
     value={input}
     onChange={(e)=>setInput(e.target.value)}
      />
     <button>AddTodo</button>
   </form>
  )
}

export default AddTodo