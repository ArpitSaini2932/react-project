import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleUpdate = (id) => {
        if (editText.trim() !== "") {
            dispatch(updateTodo({ id, text: editText }));
            setEditId(null);
        }
    };

    return (
        <div>
            <h2 className="text-white text-lg font-bold">Todos</h2>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                        {editId === todo.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleUpdate(todo.id)}
                                className="text-black px-2 py-1 rounded w-full"
                                autoFocus
                            />
                        ) : (
                            <span className="text-white">{todo.text}</span>
                        )}

                        <div className="flex gap-2">
                            {editId === todo.id ? (
                                <button onClick={() => handleUpdate(todo.id)} className="text-white bg-green-500 px-3 py-1 rounded">
                                    Save
                                </button>
                            ) : (
                                <button onClick={() => handleEdit(todo.id, todo.text)} className="text-white bg-blue-500 px-3 py-1 rounded">
                                    Edit
                                </button>
                            )}

                            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 px-3 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
