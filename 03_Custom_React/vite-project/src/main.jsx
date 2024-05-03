import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// React Component (Function).
function MyApp(){
  return (

    <div>
      <h1>Custom App | From MyApp Function Inside Main.jsx</h1>
    </div>

  )
}

// Creating a react element to render.
// End of the day, react components (functions) are converted into this form.
const reactElement = {

  // type: represent the type of HTML element.
  type: 'a',

  // props: represent the properties or attributes of HTML element.
  props: {
      href: "https://google.com",
      target: "_blank"
  },

  // Text Content of HTML element.
  children: "Click me to visit google"
};

// React has its own syntax for creating HTML elements.
const anotherReactElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " Bob";

// React has its own syntax for creating HTML elements.
const reactElementTwo = React.createElement(
  // Tag Name
  'a',

  // HTML Element attributes
  {href: "https://google.com", target: "_blank"},

  // Inner text
  "click me to visit google",

  // Injecting Variables - only write evaluated expressions here.
  anotherUser
);

  


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  //   <MyApp />
  // </React.StrictMode>,

  // reactElement
  // anotherReactElement
  reactElementTwo
)
