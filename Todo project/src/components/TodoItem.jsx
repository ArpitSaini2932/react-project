import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo);
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl shadow-lg transition-all duration-300 ${todo.completed ? "bg-gradient-to-r from-green-900 to-green-800" : "bg-gradient-to-r from-gray-800 to-gray-700"
        }`}
    >
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer accent-purple-600"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`w-full px-3 py-2 rounded-lg border-2 outline-none transition-all ${isTodoEditable ? "border-purple-500 bg-gray-900" : "border-transparent bg-transparent"
          } ${todo.completed ? "line-through text-gray-400" : "text-gray-100"}`}
        value={todoMsg.todo}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}
export default TodoItem;
