import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import GitHub from "./components/GitHub/GitHub";
import User from "./components/User/User";


// The "createBrowserRouter" function, allows you to define the paths and specify which component to render when the application is at a particular path.
const router = createBrowserRouter([
  // Path to root - Home Page
  {

    // Component <App /> is rendered, when you are at path "/".
    path: "/",
    element: <App/>,

    // All these children routes (componets) are render inside the <Outlet>, we placed in App.jsx.
    children: [
      {
        // Children Component <Home /> is rendered inside the <Outlet />, when you are at path "/".
        path: "",
        element: <Home />
      },
      
      {
        // Children Component <about /> is rendered inside the <Outlet />, when you are at path "/about".
        path: "about",
        element: <About />
      },
      
      {
        // Children Component <contact /> is rendered inside the <Outlet />, when you are at path "/about".
        path: "contact",
        element: <Contact />
      },

      {
        // Children Component <github /> is rendered inside the <Outlet />, when you are at path "/about".
        path: "github",
        element: <GitHub />
      }
    ]
  },
  

]);

// Newer Syntax for creating router.
const router_newSyntax = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Nesting or Children Components Rendering */}
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="github" element={<GitHub />}></Route>

      {/* Accepting Custom Parameters */}
      <Route path="user/:userID" element={<User />}></Route>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>

    {/* The Router Provider is responsible for providing routing-related information and functionalities to all components within your React application. It accepts a 'router' property, that specifying the routes or paths of different components. */}
    <RouterProvider router={router_newSyntax} />
  </React.StrictMode>
);