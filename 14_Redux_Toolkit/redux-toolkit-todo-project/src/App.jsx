import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { Provider } from "react-redux"
import { store } from "./redux-store/store"


function App() {


  return (
    <>
      {/* You need to wrap the components inside react-redux "Provider" who wants access to the store data. */}
      {/* The store object (exported from a file named store.js) is passed to the store prop of the Provider. This connects the Redux store to your React application. */}
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  )
}

export default App
