## Scenario
In React application, if you want to pass data from one component to another, you use `props`. `Props` stands for `Properties`, are basically used to pass data from one component to another.

## The Problem with Passing Props
In React, passing `props` is a fundamental concept that allows a parent component to share data with its child components and other components within an application.

In many cases, passing `props` can be an effective way to share data between different parts of your application. But passing `props` down a chain of multiple components to reach a specific component can make your code overly complicated. This is known as "prop drilling". 

**Let's look at a simple example to demonstrate the problem with passing props, often called "prop drilling.":**

When data needs to be passed from a parent component to a deeply nested child component, it must pass through all the intermediate components in the hierarchy, even if those components don't use the data themselves. This process of passing props through multiple layers of components is referred to as `prop drilling`.


Suppose we have a React application with three nested components: `GrandParentComponent`, `ParentComponent`, and `ChildComponent`. We want to pass some data from `GrandParentComponent` to `ChildComponent`.

`GrandParentComponent`
```javascript
import React from 'react';
import ParentComponent from './ParentComponent';

function GrandParentComponent() {

    // Suppose this message is fetched froman API.
    const message = "Hello from GrandParent";

    return(
        <>
            <ParentComponent message={message} />
        </>
    )
}

export default GrandParentComponent;
```

`ParentComponent`
```javascript
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {
    return(
        <>
            <ChildComponent message={props.message} />;
        </>
    )
}

export default ParentComponent;
```

`ChildComponent`
```javascript
import React from 'react';

function ChildComponent(props) {
    return (
        <>
            <p>{props.message}</p>
        </>
    )
}

export default ChildComponent;
```

**Explanation of above axample:**

In the code hierarchy, the `GrandParentComponent` serves as the top-level component, rendering the `ParentComponent`, which in turn renders the `ChildComponent`. 

If data needs to be passed from the `GrandParentComponent` down to the `ChildComponent`, it must first pass through the `ParentComponent`, even if the `ParentComponent` itself doesn't directly utilize the data. This process of passing props through intermediate components, is commonly referred to as `prop drilling`.


`Prop drilling` can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.

## Solution to `Prop Drilling`
Instead of passing data from multiple intermediate components down the line to reach the destination component. 

What if, we create a global object and store all the data there that a component needs to share, so that all other components can access that data. 

This can solve the problem of `Prop Drilling`. Those components who wants to share data can directly store the data that they want to share in that global object and other components can access that data directly from that global object. This enable an organized way of passing data.

And ***Context API*** works like this.

Actually, `Prop Drilling` is not only a problem in React. Instead, other libraries like Angular, Vue, etc also have this same problem, and ***Context API*** is solely associated with React and it does not exist outside React, but this problem also exists in other frameworks/libraries. So, there are some other libraries that provide a solution to this problem: these libraries are, 
1. Redux, 
2. React-Redux(used in React), 
3. Redux-Toolkit(RTK) - Easier Version of Redux.
4. Zustand

## What is Context API ?
The Context API is a feature(it's not a library, it's a in-built feature in React) in React that provides a way to share data between components without having to explicitly pass "props" through each level of the component tree. It allows you to create a global store of data that can be accessed by any component in the tree, regardless of how deep they are nested.

Basically, Context API consists of two main components: the context provider and the context consumer.

### Context Provider
The provider is responsible for creating and managing the context, which holds the data to be shared between components.

### Context Consumer
Consumer is used to access the context and its associated data.

## How to start using Context API
To start using the Context API in your React applications, you'll need to follow a few simple steps:

### Create a Context Object
First, you need to create a context object using the `createContext` function from the `react` library. This context object will hold the data that you want to share across your application.

Create a new folder name context and inside this folder create a new file named UserContext.js and add the following code to create a context object:

```javascript
/*
Naming Conventions:
1. Folder Name is usually set as "context", it represent all the context files are present inside this folder.
2. Context Files are purely JavaScript file, because all the code written inside context is purely JavaScript code. That's why we created this file with ".js" extension.
*/

import React from "react";

// Creating Context Object using `createContext()` - This context object will hold the data that you want to share across your application.
const UserContext = React.createContext();

// Now, export the context object so that we can use it in other parts of our application.
export default UserContext;
```

> ***"Just think this context as a global Object."***

### Wrap Components with a Context Provider
After creating a context object you need to create a ***context provider*** that provides the data to other components.

To create a ***context provider***, you just need to wrap all the components who wants access to shared data inside the context object you have created like this,

```
<UserContext>
    <ComponentOne>
        <ComponentTwo>
              <NestedComponent />
        </ ComponentTwo>
</ UserContext>
```

When components are wrapped inside a context object, like <UserContext> in this case, then it acts as a context provider, granting access to shared data for all components nested within it.

See, UserContextProvider.jsx file for more details.

### Accessing or Consuming the Context
The 'useContext' hook is used to consume data from a React context. The 'useContext' hook takes a context object as an argument. This context object is the one you created using React.createContext().

While useContext is primarily used for consuming context, it can also be used to update the context data indirectly through functions provided by the context provider.

See components folder for more details.
