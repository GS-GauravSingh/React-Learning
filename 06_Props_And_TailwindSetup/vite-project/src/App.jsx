import Card from "./PropsExample/Card"

function App() {

  let myObj = {
    name: "Bob",
    age: 21
  };

  let myArr = [1,2,3,4]

  return (
    <>
      <h2 className="bg-green-400 text-center text-black p-4 rounded-xl text-xl mb-4">Tailwind Test</h2>

      {/* Creating Resuable Components. */}
      <Card />

      {/* The name="Alice" attribute is being passed as a prop to the Card component. This means that the Card component will receive a prop named name with the value "Alice". Inside the Card component, you can access this prop using props.name */}
      <Card name="Alice"/>
      {/* <Card name="Alice" myArr = [1,2,3]/> - error */}
      {/* <Card name="Alice" {arr: [1,2 3]}/> - error */}

      {/* Passing Object in Props */}
      <Card name="Alice" someObj={myObj}/>

      {/* Passing Array Object in Props */}
      <Card name="Alice" someArr={myArr}/>
      
    </>
  )
}

export default App
