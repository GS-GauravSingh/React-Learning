## To understand React Hooks, you first need to learn about components.
In React, components are the building blocks of your UI. They are reusable and independent pieces of code responsible for rendering a part of your user interface.

***"In short, react components are peice of code that define different parts of your User Interface (UI) or Website. Each component can be reused and combined with other components to create the overall UI of your application. "***

There are two primary types of components in React:
1. Functional Components
    * Functional Components are simple JavaScript Functions and they accept "props" as an argument and return HTML in the form of JSX, which describes the structure and content of the component's UI.

    * "Props" - Props stand for "Properties", and they are used for passing data from one functional component (react components are functions) to another. This allows us to make reusable UI components.

    * JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. This makes it much easier and more intuitive to describe the structure of your UI components in React.

    * Example of React Functional Component:

    ```javascript
    // Functional component named Greeting
    // Optional: It takes "props" as an argument, which is an object containing any properties passed to the component.
    function Greeting(props) {
    // Here, props is an object containing any properties passed to the component
    return (
        <div>

        {/* We're using props.name to access the name property passed to the component. */}
        {/* Curly Brackets syntax is used to inject variable inside JSX. Ex: {variable_name} */}
        <h1>Hello, {props.name}!</h1>
        <p>Welcome to my website.</p>
        </div>
    );
    }

    // Finally, we export the Greeting functional component so it can be imported and used in other parts of our application.
    export default Greeting;
    ```

2. Class Components
    * Class components in React are simple JavaScript classes with additional features provided by React. These additional features include state management, lifecycle methods, and the ability to define reusable UI components. 

    * In React, when you create a class component, your class must inherit from the React.Component class. This is because React.Component provides the base functionality and features that are necessary for a component to work within the React framework.

    * And the class component must include "render()" method, which return HTML in the form of JSX, which describes the structure and content of the component's UI.

    * Example: Let's convert the above Functional Component into a Class Component:
    ```javascript
    // React is imported to enable the use of JSX syntax.
    // In React, when you're defining a class component, you typically import React and Component from the 'react' package. By importing Component from 'react', you're able to define your class components with all the features and capabilities provided by React.
    import React, { Component } from 'react';

    // Class component named Greeting
    class Greeting extends Component {

        // In the render() method, we return JSX, which describes the structure and content of the component's UI.
        render() {
            return <h1>Hello | From Class Component</h1>;
        }
    }

    // Finally, we export the Greeting class component so it can be imported and used in other parts of our application.
    export default Greeting;
    ```


## What is State ?
In React, "state" is a ***JavaScript object*** that represents the current condition or data of a component. It's essentially a snapshot of how a component looks at any given time. State is used to manage data that might change over time, such as user input, fetched data from an API, or UI-related information like whether a modal is open or closed.

***In other words, state are also called as dynamic variable because they hold data that may change over time.***

Example: Creating my own state object:
```javascript
import React, { Component } from 'react';

// Class component named Greeting
class Greeting extends Component {

    // Constructor
    constructor(props) {

        // This is a JavaScript functionality: we have to explicitly call or invoke the constructor of super class.
        super(); 

        // State Object
        this.state = {
            name: props.myName
        };
    }

    // Function to modify the state object.
    // Optional: Writing function keyword inside class -> JS functionality.
    changeName(newName){
        // this.setState is used to update the component's state property.
        // Inside setState, we pass a function that returns an object representing the new state. This ensures that the state is updated correctly and avoids directly mutating the state.
        this.setState({name: newName})
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.state.name} | From Class Component</h1>

                {/* onClick function accepts a reference of a function or a callback function. */}
                <button onClick={() => (this.changeName("Bob"))}>Change Name</button>
            </div>
        )
    }
}

// Finally, the Greeting component is exported as the default export, making it available for use in other parts of your application.
export default Greeting;
```

#### Important Points:
1. In React, when you want to update the state of a component, you should always use the setState() method provided by React. This method is specifically designed for updating state and ensures that React tracks the state changes properly. When you call setState(), React knows that the component's state has changed, and it schedules a re-render of the component. This means that React will call the render() method again to update the UI based on the new state.

2. It's important to avoid directly modifying the state object using assignment (this.state.name = "Bob") because React won't detect the change. Directly modifying the state bypasses React's reconciliation process, which can lead to unexpected behavior and bugs.

3. If you want to use this state functionality inside functional components, then you need to use Hooks provided by React. You cannot define your own state object inside a functional component because in functional components, you don't have access to the "this" keyword because they are just regular JavaScript functions. 

4. State Object is a private property of a class component and it cannot be accessed outsite the class.

5. If you are injecting a normal JavaScript variable in react component, initially it will be displayed on the webpage, but if you try to update the variable, then, in this case, the changes will not propagate to your UI or you can say that the changes will not reflect into your UI, although the variable will update in the memory but the changes will not reflect in the UI, this is because normal javascript variables do not re-render by React or you can say that react won't identify the change in normal javascript variables.
But in the case of a state object, React keeps track of the state object, so whenever react detects a state change it will automatically call a render() method so that the changes will be reflected in the UI.



## Hooks
Hooks are simple JavaScript functions provided by React so that you can use state object and other React functionality inside the functional components. React provides several Hooks and each of them has its own specified task.

## Types of Hooks:
### "useState"
It is the most commonly used React Hook. It allows functional components to have state variables. It takes an initial state value as the argument and returns an array with two elements — the current state value and a function to update that state.

As we know React keeps track of state objects (in class components) or state variables (in functional components), so whenever React detects any state change in the state variable, it automatically calls the render() method, so that the component will be re-rendered and the changes will be reflected in UI.

#### Syntax of useState:
```javascript
const [state, setState] = useState(value);
```

##### Here's a breakdown of the syntax:
1. const: This declares a constant variable.
2. [state, setState]: This uses array destructuring to assign names to the elements returned by the useState hook. The first element (state) represents the current state value, and the second element (setState) represents the function used to update the state.
3. useState(value): This is the useState hook, which is called with an initial state value (value). It returns an array with two elements: the current state value and a function to update that state.

#### Simple Project: Counter (a simple project to demonstrate the working of "useState" hook).
Task: Develop a basic React application featuring a counter with increment and decrement buttons.

##### Code:
```javascript
import React, { useState } from "react";

// Functional Component name Counter.
// Props - contains an initial value of counter.
// Object Destructuring: {initialValue = 0}, setting default value of "initialValue".
function Counter({ initialValue = 0 }) {
    
    // Declaring a state variable.
    const [counterValue, setCounterValue] = useState(initialValue);
    
    // Function to increment the counter.
    function incrementValue(){
        setCounterValue(counterValue + 1);
    }

    // Function to decrement the counter.
    function decrementValue(){
        setCounterValue(counterValue - 1);
    }

    return (
        <>


            <div style={{display:"flex", columnGap:"1rem"}}>

                {/* Increment Button */}
                <button onClick={incrementValue} style={{outline:"none", border:"none", borderRadius: "5px", padding: "0.5rem 1rem", fontSize: "1.5rem", backgroundColor: "white", cursor: "pointer"}}>+</button>

                {/* Container to display counter. */}
                <p style={{borderRadius: "5px", padding: "0.5rem 1rem", fontSize: "1.5rem", backgroundColor: "#222831"}}> Count: {counterValue}</p>


                {/* Decrement Button */}
                <button onClick={decrementValue} style={{outline:"none", border:"none", borderRadius: "5px", padding: "0.5rem 1rem", fontSize: "1.5rem", backgroundColor: "white", cursor: "pointer"}}>-</button>

            </div>



        </>
    )
}

export default Counter;
```

### "useMemo"
The useMemo hook in React is used for memoization. It is a performance optimization technique that helps to avoid expensive calculations on every render by memoizing the result (or storing the result in cache memory) of a computation and returning the memoized value when the inputs have not changed.

#### Syntax of useMemo:
```javascript
const memoizedValue = useMemo(function(){}, [dependencies]);
```

##### Here's a breakdown of the syntax:
1. memoizedValue: This variable stores the memoized value returned by the useMemo hook. This value will be re-evaluated only if any of the dependencies change.

2. useMemo(function(){}, [dependencies]): This is the useMemo hook itself. It takes two arguments:
    * The first argument is a function that computes the memoized value.
    * The second argument is an array of dependencies. If any of these dependencies change between renders, the memoized value will be re-computed. If the dependencies remain the same, React will return the cached value.


### "useEffect"
When the component is first rendered, "useEffect" runs immediately after the initial render (initial render refers to the first time a component is rendered and displayed in the browser.). The dependency array specifies the variables that useEffect should watch for changes. If any of these variables change value between renders, useEffect will run again. If the dependency array is empty, useEffect will only run after the initial render and won't re-run on subsequent renders.

#### Syntax of useEffect:
```javascript
useEffect(() => { // code }, [dependencies]);
```

#### Important Points:
1. If no dependency array is passed to the useEffect hook, it will run after every render.
    ```javascript
    useEffect(() => {
    // code
    });
    ```

2. If you pass an empty array ([]) as the dependency array to the useEffect hook, the effect will run only once after the initial render (The initial render refers to the first time a component is rendered and displayed in the browser.), similar to how it behaves with a dependency array containing constant values that never change.
    ```javascript
    useEffect(() => {
    // code
    }, []);
    ```

3. If you pass values in the dependency array of the useEffect hook, the effect will run whenever any of those values change between renders.


### "useRef"
"useRef" is a reference hook and it is used to create a variable that stores a reference of any particular DOM element. This reference can be used to access and manipulate the referenced element.

#### Syntax of useRef:
```javascript
const myRef = useRef(initialValue);
```

##### Here's a breakdown of the syntax:
1. useRef(initialValue): This is the hook call. It creates a mutable(Mutable refers to something that can be changed or modified after it's been created) ref object initialized with an optional initial value (initialValue). The ref object persists for the entire lifetime of the component.

2. myRef.current: The .current property of the ref object holds the reference to the DOM element or value.

3. ```<input ref={myRef} />``` : You attach the ref object (myRef) to a JSX element using the ref attribute. This allows you to access and manipulate the corresponding DOM element imperatively.

### Additional Important Points:
1. In React applications, you have access to the window object, just like in regular JavaScript because React code is ultimately compiled into HTML, CSS, and JavaScript, which are then executed within a web browser environment and in browsers we have access to window object.

2. In Node JS environment, the code is executes in server-side (server-side rendering) and that's why we don't have access to the window object.