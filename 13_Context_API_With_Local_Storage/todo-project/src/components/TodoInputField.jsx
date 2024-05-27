import React, { useId, useState } from 'react'
import { useTodoContext } from '../context';

function TodoInputField() {

    const [todoMsg, setTodoMsg] = useState("");
    const { addTodo } = useTodoContext();

    function addTodoToContext(event) {
        event.preventDefault();

        if (todoMsg.length == 0) {
            return;
        }

        addTodo({
            todoID: Date.now(),
            todoText: todoMsg,
            isCompleted: false,
        });

        setTodoMsg("");
    }

    return (
        <div className='p-4 sticky top-0 z-10' style={{ width: "min(80vw, 680px)", boxShadow: "0px 0px 5px black", backgroundColor: "#0f4c5c"}}>
            <h1 className='font-semibold text-2xl sm:text-3xl text-white text-center whitespace-nowrap mb-[1.5rem]'>Manage Your Todos</h1>

            {/* Form */}
            <form onSubmit={addTodoToContext} className='flex items-center'>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder='Write Todo...'
                    className='w-full rounded-l-lg px-3 outline-none bg-white/20 py-1.5 text-white font-medium'
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)} 
                    />


                {/* Submit Button */}
                <button
                    type='submit'
                    className='py-1.5 px-3 bg-green-600 hover:bg-green-500 rounded-r-lg text-white font-semibold'
                >Add</button>
            </form>
        </div>
    )
}

export default TodoInputField;