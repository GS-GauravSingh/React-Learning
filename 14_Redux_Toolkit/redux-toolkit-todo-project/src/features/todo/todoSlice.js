/*
Naming Convention: 

Using the "Slice" suffix in the file name, such as "todoSlice.js", is a common convention in Redux Toolkit projects. This naming convention helps developers quickly identify that Redux Toolkit is being used in the project, and specifically, that the file defines a Redux slice.
*/

// `createSlice` function is used to create a new slice.
// `nanoid` function is used to generate unique id.
import { createSlice, nanoid } from '@reduxjs/toolkit'

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object. 
const initialState = {
    todos: [

        // Temporary Object to understand Todo Structure - Deleted Later.
        {
            id: nanoid(),
            text: "Hello World"
        }
    ]
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
export const todoSlice = createSlice({

    // `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
    name: "todo",

    // See, every slice has an initial state and we have created this "initialState" above. 
    // We need to pass it here,  or if you want you can define initial state here also like this,
    /*
    initialState: {
        todos: [
            // Temporary Object to understand Todo Structure - Deleted Later.
            {
                id: 1,
                text: "Some Text"
            }
        ]   
    }
    */
    initialState,

    /*
    `reducers` are actually used to handle actions. Like: add todo, delete todo etc.
    */
    reducers: {
        /*
        In Context API: when providing default values in `createContex()` function, you have option, you can define a function directly within `createContext()` or you can define that function outside in other components. But here, In Redux Toolkit, you're required to define the functionalities. 

        In Redux, each reducer function has access to two arguments: `state` and `action`. Where, `state` represents current condition or snapshot of slice and `action` is an object that represent what changes need to be made in the current state of your application, for example: For example, if the action type is "Add_Todo", the reducer would add a new todo item to the slice's data.
        */

        // These are reducer functions.
        addTodo: function(state, action){
            // Creating a new Todo.
            const newTodo = {
                id: nanoid(),
                text: action.payload
            };
            
            // pushing this new todo into our array of objects "todos" present in the initial state of slice.
            state.todos.push(newTodo);

        },

        deleteTodo: function(state, action){
            const id = action.payload;
            state.todos = state.todos.filter((todo) => (todo.id !== id))
        }
    }
});

// Now you need to export the reducer function. By exporting the reducer functions using `todoSlice.actions`, you make these functions available for use in other parts of your application.
export const {addTodo, deleteTodo} = todoSlice.actions;

// Now, the Redux store does not update its slice data with any random function, you need to tell the store that these are the reducers functions that I am going to use to update or modify the data and after that the Redux store will allow these reducer function to make changes to slice data. 
// So, you need to import these reducers function in redux store file and make the necessary configuartions.
export default todoSlice.reducer;