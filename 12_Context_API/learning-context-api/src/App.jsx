import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContexProvider from "./context/UserContextProvider"

function App() {

  return (
    <>
      <h1>Learning Context API</h1>

      {/* Now that we've created the provider component, we need to consume the context in other components. */}

      <UserContexProvider>
        {/* Inside this all components can access the data. */}

        {/* This Login and Profile are children - remember UserContexProvider function accepts an argument.
          
          Login and Profile components are nested within the UserContextProvider. This means they are children of the UserContextProvider component, and therefore, they have access to the context data provided by it.
          */}
        <Login />
        <Profile />
      </UserContexProvider>
    </>
  )
}

export default App
