import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header />

      {/* The Outlet component in React Router is specifically designed to render child routes within a parent route.  */}
      <Outlet />

      <Footer />
    </>
  )
}

export default App
