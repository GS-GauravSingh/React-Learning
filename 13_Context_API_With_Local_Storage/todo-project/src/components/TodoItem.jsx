import React, { useState } from 'react'
import { useTodoContext } from '../context'

function TodoItem({ todo }) {

    const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todoText);


    return (
        <div className='flex bg-white' style={{ width: "min(80vw, 680px)" }}>

            {/* Checkbox */}
            <div className='flex items-center pl-2'>
                <input
                    type="checkbox"
                    className='cursor-pointer h-[20px] w-[20px]' style={{ accentColor: "green" }}
                    checked={todo.isCompleted}
                    onChange={() => toggleComplete(todo.todoID, todo)} />
            </div>

            {/* Input to display Todo Text */}
            <input
                type="text"
                className={`w-full pl-2 py-1.5 font-medium border-none outline-none ${todo.isCompleted ? "line-through" : "no-underline"}`}
                value={todoMsg}
                readOnly={!isTodoEditable}
                onChange={(e) => setTodoMsg(e.target.value)}
            />

            {/* Save and Edit Button */}
            <button
                className='px-2 py-1.5 disabled:cursor-no-drop disabled:opacity-70'
                disabled={todo.isCompleted}
                onClick={() => {
                    if (todo.isCompleted) return;

                    if (isTodoEditable) {
                        updateTodo(todo.todoID, { ...todo, todoText: todoMsg })
                        setIsTodoEditable(false)
                    }
                    else {
                        setIsTodoEditable((prev) => !prev)
                    }
                }}
            >{isTodoEditable ? "📁" : "✏️"}</button>

            {/* Delete Todo Button */}
            <button className='px-3 py-1.5 bg-red-600' onClick={() => (deleteTodo(todo.todoID))}>
                {/* Delete Icon */}
                <i className="fa-solid fa-trash text-white"></i>
            </button>
        </div>
    )
}

export default TodoItem