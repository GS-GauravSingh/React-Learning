import React, { useEffect, useState } from "react"
import { TodoInputField, TodoItem } from "./components"
import { TodoContextProvider } from "./context"

function App() {

  // State variable to store todo objects data.
  // This is actually referring to the 'todosArr' we have in our todo context.
  const [todosArr, setTodosArr] = useState([]);

  function addTodo(todo) {
    // 'todo' is an object contains information about todo.
    setTodosArr((prev) => [...prev, todo]);
  }

  function updateTodo(todoID, todo) {
    setTodosArr((prev) => (prev.map((individualTodo) => (individualTodo.todoID === todoID ? todo : individualTodo))))
  }

  function deleteTodo(todoID) {
    setTodosArr((prev) => (prev.filter((individualTodo) => (individualTodo.todoID !== todoID))))
  }

  function toggleComplete(todoID, todo) {
    setTodosArr((prev) => (prev.map((individualTodo) => (individualTodo.todoID === todoID ? { ...todo, isCompleted: !individualTodo.isCompleted } : individualTodo))))
  }

  
  // Accessing data from the browser's local storage.
  useEffect(() => {
    // The 'localStorage' object allows you to save key/value pairs in the browser.
    // This actually stored data in the form of the string.
    const todos = JSON.parse(localStorage.getItem("todosArr"));
    // So, it returns data in the from of string, so we need to parse in into a JSON format (JSON can be in the form of array's).
    
    if (todos && todos.length) {
      setTodosArr(todos);
    }
  }, []);
  
  // Storing data into browser's local storage.
  useEffect(() => {
    // Convert the array to a string and save it to localStorage
    // It accepts key and value pair in string format.
    localStorage.setItem("todosArr" ,JSON.stringify(todosArr));
  }, [todosArr])

  return (
    <TodoContextProvider value={{ todosArr, addTodo, updateTodo, deleteTodo, toggleComplete }}>

      <div className="flex flex-col items-center pt-[2.5vw]" style={{ backgroundColor: "#0f4c5c", minHeight: "100vh" }}>

        {/* Todo Input Field */}
        <TodoInputField />

        {/* Todo Items Container */}
        <div className={`pt-[2rem] flex flex-col gap-3 max-h-fit`}>
          {/* Todo Items */}
          {
            todosArr.map((todo) => (
              <div key={todo.todoID} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))
          }

        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
