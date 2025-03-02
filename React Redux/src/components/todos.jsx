import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function todos() {
    const dispatch = useDispatch()
 const todos = useSelector(state => state.todos)
    return (
    <>
    <div>My todo</div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
            <button onClick={()=> dispatch(updateTodo(todo.id))}>Update</button>
        </li>
    ))}
    </>
  )
}

export default todos