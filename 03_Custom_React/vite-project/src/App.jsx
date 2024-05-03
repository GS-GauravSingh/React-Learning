
function App() {


  // Injecting variable in JSX.
  const userName = "Alice";

  // Variable declaration (outside return block)
  const condition = true;

  // JavaScript statement (outside return block)
  if (condition) {
    console.log('Condition is true!');
  }

  return (
    <div>
      <h1>Custom App | From App.jsx</h1>
      <h1>Injecting Variables using curly brackets syntax {userName}</h1>

      {/* Inside curly brackets in JSX, you can only write evaluated expressions. */}
      {/* Invalid: JavaScript statement */}
      {/* {if (condition) { doSomething(); }} */}
      {/* Invalid: Variable assignment */}
      {/* {let x = 5;} */}
      {/* In case you want to write these expression, you can write these outsite the return block */}
    </div>
  )
}

export default App
