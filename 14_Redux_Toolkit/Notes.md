## What is Redux Toolkit ?
As we know, React itself is a standalone JavaScript Library used for building User Interfaces (UI). However, it comes with several other libraries or packages that extend its functionality, such as React DOM and React Native. If you're developing web applications, you can use React along with React DOM for rendering components in web browsers because React DOM provides methods and utilities for interacting with the Document Object Model (DOM) of web browsers. On the other hand, if you're building mobile applications for iOS and Android platforms, you would use React along with React Native, which allows you to create native mobile apps using React and JavaScript.

Context API is used for state management. In other words, we can say that, Context API is used to store data in a global store. So, that other components can access the data present in that global store.

Now, Redux itself is a standalone library used for state management and if you want to use Redux in React, then you need to use Redux(core library for state management) along with React-Redux, a library that allow React to use Redux functionalities.

Using Context API you create a global store in which you store data you want other components can access, but COntext API is solely associated to React and it does not work outside React.

Similarly, using Redux you create a global store in which you store data you want other React components can access, but React components cannot directly access the global store you have created using Redux, you need the React-Redux library for this. React-Redux library binds or connects these two libraries (React and Redux) together. So, that React components can access the global store.

Redux Toolkit (RTK) can be considered as an optimized version of Redux.

## Installation:
Redux Toolkit Installation:
```
npm install @reduxjs/toolkit
```

For binding React with Redux Toolkit.
```
npm install react-redux
```

## Important Points:
1. Context API
    * In Context API, you typically create separate contexts for different pieces of data or different aspects of your application state. For example, you might have one context for managing product details, another for user authentication, and so on.
    * Each context in Context API is independent and manages its own state.

2. Redux
    * In Redux, you have a single centralized store. However, within that store, you can create a separate individual store and this individual store is called as "slice".
        * For example, if you're building a todo list app, you might have a todo slice that handles all the todo-related data and logic. This includes things like adding, deleting, and updating todos.
        * For example, if you're building an e-commerce app, you might have a product slice that handles all the product-related data and logic. This includes things like adding products to the shopping carts, removing them, and adjusting quantities. Also, you might have a user authentication slice that handles all the authentication-related data and logic. This includes things like user log in, registration, and profile updates.
    * Similarly, you can create multiple individual store(slice) inside the Redux larger store.

## Concept used in Redux or Redux Toolkit
### Store
The Redux store is like a giant container that holds all the data for your application. This giant box can have different compartments for storing different types of data and these compartments are called as ***slice*** in Redux.

Application can have only one single Redux Store, this is also known as ***single source of truth***, meaning all the important information about your application is kept in one place.

### Action
Action is an object that represent what changes need to be made in the current state of your application. An action must have a "type" property describing the action being performed. This "type" property is typically defined as a string constant to ensure consistency and avoid typos.

With the "type" property, you can also include additional properties in the action object to provide more information about the action or the data associated with it.

Here's an example of an action object with additional properties:
```javascript
{
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Learn Redux',
    completed: false
  }
}
```
```javascript
{
  type: 'DELETE_TODO',
  payload: {
    id: 1,
  }
}
```

### Reducer
Reducers are basically function that are responsible for changing or modifying the data stored in the redux store.

### Dispatch
In Redux, dispatch is a function provided by the redux store that allows you to send an action to update the state of your application. In other words, dispatch is function that uses a reducer function to make changes to the data stored in a redux store.

### `useSelector`
`useSelector()` is a hook provided by the React-Redux library that allows functional components to extract data from the Redux store. `useSelector()` has access to the state of the Redux store. 