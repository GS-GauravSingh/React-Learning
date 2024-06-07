import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice'
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(function () {

    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })

  }, [])


  // loading = true, means user is logged in, else user is logged out.
  if (!loading) {
    return (
      <>
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <h1>Logged Out</h1>
      </>
    )
  }
}

export default App
