import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);  // ✅ Corrected: Ensure correct path in Redux state

    // 🆕 State for tracking which todo is being edited
    const [editId, setEditId] = useState(null);  // Stores the ID of the todo being edited
    const [editText, setEditText] = useState(""); // Stores new text input by the user

    // 🆕 Function to enter edit mode
    const handleEdit = (id, text) => {
        setEditId(id);   // Set the ID of the todo being edited
        setEditText(text); // Pre-fill input with existing todo text
    };

    // 🆕 Function to update the todo when "Save" is clicked or Enter is pressed
    const handleUpdate = (id) => {
        if (editText.trim() !== "") {  // Prevent empty todos
            dispatch(updateTodo({ id, text: editText }));  // ✅ Dispatch updateTodo with the new text
            setEditId(null);  // Exit edit mode
        }
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                        {editId === todo.id ? ( 
                            // 🆕 Show input when editing
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleUpdate(todo.id)} // 🆕 Save on Enter key
                                className="text-black px-2 py-1 rounded w-full"
                                autoFocus
                            />
                        ) : (
                            // Default view: Show todo text
                            <div className='text-white'>{todo.text}</div>
                        )}

                        <div className="flex gap-2">
                            {editId === todo.id ? (
                                // 🆕 Show "Save" button while editing
                                <button onClick={() => handleUpdate(todo.id)} className="text-white bg-green-500 px-3 py-1 rounded">
                                    Save
                                </button>
                            ) : (
                                // 🆕 Show "Edit" button when not editing
                                <button onClick={() => handleEdit(todo.id, todo.text)} className="text-white bg-blue-500 px-3 py-1 rounded">
                                    Edit
                                </button>
                            )}

                            {/* Delete Button */}
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 px-3 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
