import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,  
        todo:"enter msg",
        checked : false
    }
    ],
    addTodo :(todo)=>{},
    deleteTodo : (id)=>{},
    updateTodo : (id,todo )=>{},
    toggleCompleted : (id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider