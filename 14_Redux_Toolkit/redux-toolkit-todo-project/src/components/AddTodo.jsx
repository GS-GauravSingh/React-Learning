import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [todoMsg, setTodoMsg] = useState("");

    const dispatch = useDispatch();

    function addTodoHandler(event) {
        event.preventDefault();

        // `dispatch` is function that uses a reducer function (in this case `addTodo`) to make changes to the data stored in a redux store. The reducer function can take a payload as part of the action object as input. The payload typically contains the data necessary to perform the state update.
        dispatch(addTodo(todoMsg));

        /*
        When you call dispatch(addTodo(todoMsg));, the addTodo action creator generates an action object that looks like this:
        {
            type: 'todo/addTodo',
            payload: todoMsg
        }

        Here's the breakdown of above code:
        1. type: `todo` indicates the slice name, `addTodo` indicate the reducer functions used to makes changes to the data.
        2. payload: Contains the additional data necessary to perform the action. In this case, it holds the value of `todoMsg`.
        */

        setTodoMsg("");
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo