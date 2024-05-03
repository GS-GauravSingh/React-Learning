import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

      {/* Button Outer Container */}
      <div className="fixed bottom-12 left-0 right-0 flex flex-wrap justify-center px-2">

        {/* Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {/* Individual Button */}
          <button onClick={()=> setColor("red")}  className="outline-none border-none px-4 py-1 rounded-full text-white bg-red-600">Red</button>

          {/* Individual Button */}
          <button onClick={()=> setColor("green")} className="outline-none border-none px-4 py-1 rounded-full text-white bg-green-600">Green</button>

          {/* Individual Button */}
          <button onClick={()=> setColor("blue")} className="outline-none border-none px-4 py-1 rounded-full text-white bg-blue-600">Blue</button>

          {/* Individual Button */}
          <button onClick={()=> setColor("orangered")} className="outline-none border-none px-4 py-1 rounded-full text-white bg-orange-600">Orange</button>

          {/* Individual Button */}
          <button onClick={()=> setColor("black")} className="outline-none border-none px-4 py-1 rounded-full text-white bg-black">Black</button>
        </div>

      </div>

    </div>
  )
}

export default App
