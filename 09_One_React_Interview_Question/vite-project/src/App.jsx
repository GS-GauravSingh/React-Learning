import { useState } from 'react'
import './App.css'

function App() {
  const [counterValue, setCounterValue] = useState(0)

  // Function to increment the counter value
  function incrementCounterValue() {
    setCounterValue(counterValue + 1);

    /*
    Question: What if I duplicate the above code like this,
    setCounterValue(counterValue + 1);
    setCounterValue(counterValue + 1);
    setCounterValue(counterValue + 1);
    setCounterValue(counterValue + 1);

    What do you think, will happen with the counter value, will it increment 4 times or will it just increment one time?
    
    Answer: 

    **** What Happens ? ****
    Initial State: The counter starts at 0.
    Clicking the Button: When you click the button, "incrementCounterValue" function runs and calls setCounterValue(counterValue + 1) four times in a row.

    **** Expected vs. Actual Behavior ****
    Expected: You might expect the counter to go from 0 to 4 because you called the "setCounterValue(counterValue + 1)" four times.
    Actual: The counter only increases from 0 to 1.


    **** Why ? ****
    React's useState hook groups multiple state updates that happen in the same event handler to optimize performance. This is called batching. When you call setCounterValue(counterValue + 1) multiple times in a row, React doesn't immediately apply each update. Instead, it batches them together and only applies the final result.

    **** The Correct Way ****
    To make sure the counter actually increases by 4, you should use a function inside setCounterValue. This function takes the previous counter value and adds 1 to it each time, ensuring that each update uses the most current value.

    Passing a callback function to useState in React gives you access to the previous state value, which you can then use to update the state based on the previous value.

    Like this,
    setCounterValue(function (previousCounterVal) {

      // You have to return the value because we are using curly brackets.
      return previousCounterVal + 1;
    });

    // Arrow function syntax
    setCounterValue( (previousCounterVal) => (previousCounterVal + 1));
    */


  }

  // Function to decrement the counter value
  function decrementCounterValue() {
    setCounterValue(counterValue - 1);
  }

  return (
    <>
      <h1 className='heading'>Counter</h1>
      <h3 className='display-counter'>Counter Value: {counterValue}</h3>
      <div className='btn-container'>

        {/* The onClick event handler takes a function(whether it's a normal function or a callback function) as an argument and it executes a function when an element is clicked.  */}
        <button onClick={incrementCounterValue}>Increment</button>
        <button onClick={decrementCounterValue}>Decrement</button>
      </div>
    </>
  )
}

export default App
