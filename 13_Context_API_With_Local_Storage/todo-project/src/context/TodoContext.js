/*
Naming Conventions:
1. Folder Name is usually set as "context", it represent all the context files are present inside this folder.
2. Context Files are purely JavaScript file, because all the code written inside context is purely JavaScript code. That's why we created this file with ".js" extension.
*/

import React, { useContext } from "react";

// Creating Context Object using `createContext()` - This context object will hold the data that you want to share across your application. Now, `createContext()` function also accepts a default value as an argument. 
export const TodoContext = React.createContext({
    todosArr: [

        // Demo Individual Todo Object - contains information about todo.
        {
            // Each todo has its own unique ID - used for identification purpose.
            todoID: 1,
            todoText: "Some Text",
            isCompleted: false,
        },
    ],

    addTodo: function(todo){},
    updateTodo: function(todoID, todo){},
    deleteTodo: function(todoID){},
    toggleComplete: function(todoID, todo){}
});

// Context Provider
export const TodoContextProvider = TodoContext.Provider;

// Custom Hook to access the TodoContext.
export function useTodoContext() {
    return useContext(TodoContext);
}

