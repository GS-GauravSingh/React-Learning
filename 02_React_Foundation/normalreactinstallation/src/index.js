// importing React from react library.
import React from 'react';


// importing ReactDOM - The 'react-dom' package provides DOM-specific methods that are used to render React components into the DOM.
import ReactDOM from 'react-dom/client';

// Important component to be display on web.
import App from './App';

import TestFunc from './Test';


// createRoot() - The purpose of the function is to define the HTML element where a React component should be displayed.
const root = ReactDOM.createRoot(document.getElementById('root'));

// render() - method is used to render HTML Elements.
root.render(

  // React.StrictMode - this basically applies stricter rules to write code in React like "use strict" in JavaScript.
  <React.StrictMode>

    {/* 
    Question: <App /> is not a standard HTML element like <div> or <span> or <br />. Then, how is this element rendered?
    ANswer: <App /> is not a standard HTML element. Instead, it's a React component. JSX, which stands for JavaScript XML, a feature of React, enables us to write HTML-like code directly within JavaScript files. 

    JSX allows you to define React components using a syntax that closely resembles HTML, making it easier to visualize and work with your UI code. When you write <App /> in your JSX code, you're actually referring to a React component named App. So, when you render <App /> in your React application, React looks for a component named App in your codebase and renders it as instructed by the component definition.
    */}
    {/* Also note the new syntax for Comments. */}
    <App />
    <TestFunc />
  </React.StrictMode>
);
