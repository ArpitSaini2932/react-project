import { useState,useEffect } from 'react'

import './App.css'
import {useTodo,TodoContext,TodoProvider} from './contexts'
import { TodoForm ,TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ TodoContext, useTodo, updateTodo, deleteTodo, addTodo, toggleCompleted }}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
          <h1 className="text-4xl font-bold text-center text-purple-400 mb-8">Manage Your Todos</h1>
          <div className="mb-6 flex-1 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <TodoForm />
              </div>
              <div className="space-y-4">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
export default App 
