import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
  
    const add = (e) => {
      e.preventDefault();
      if (!todo) return;
      addTodo({ todo: todo, checked: false });
      setTodo("");
    };
  
    return (
      <form onSubmit={add} className="flex gap-3">
        <input
          type="text"
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 outline-none transition-all shadow-sm"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Add
        </button>
      </form>
    );
  }
export default TodoForm;

