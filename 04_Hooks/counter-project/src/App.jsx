import { useState } from "react";

function App() {

    // useState hook is responsible for propogating changes to UI or DOM.
    // it's a method.
    // it take 1 parameters, that is the default value of variable.
    // and it return 2 values in the form of array, at 0th index we have a counter variable and second is  function that controls the counter.
    const [counter, setCounter] = useState(5)

    // let counterValue = 5;

    function incrementValue() {
        // counterValue++;
        // console.log(counterValue);

        if (counter < 20) {
            setCounter(counter + 1);
        }
    }

    function decrementValue() {
        // counterValue--;
        // console.log(counterValue);
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }



    return (
        <>
            <h1>Project Counter</h1>
            <h2>Counter Value: {counter}</h2>

            <button onClick={incrementValue}>Increment Value {counter}</button>
            <br />
            <button onClick={decrementValue}>Decrement Value  {counter}</button>
            <footer>Counter Value:  {counter}</footer>
        </>
    )
}

export default App;

/*
Till now, we are able to inject variables and also we can update the value of the injected variable. But the problem is that changes are not reflected in the website, when we increment and decrement the value of "counterValue", the changes are not reflected in our webpage.
So, the problem is with UI updation. If you are solving this problem with classical HTML, CSS, and JavaScript, then this problem can be easily solved and the changes can also be reflected easily. But in the case of React, you can update the variables it's your choice, but when it comes to UI updation, then React will control the game. React provides you some methods, called "Hooks", using these methods "Hooks" you can update data on the UI 

Hooks are simple JavaScript Functions
*/