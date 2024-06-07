## Technologies Used in this Project

### Redux Toolkit (for state management)
***Installation:***
Redux Toolkit Installation:
```
npm install @reduxjs/toolkit
```

For binding React with Redux Toolkit.
```
npm install react-redux
```
### React Router (for navigation)
***Installation:***
```
npm install react-router-dom
```

### Appwrite
Appwrite is an open-source backend-as-a-service (BaaS) platform that provides developers with a set of backend tools and services to build full-stack web and mobile applications. Essentially, it offers tools related to the backend, such as database management, storage, authentication, and more.

Firebase is another example of a backend-as-a-service (BaaS) platform, but it is not open-source and is provided by Google.

***Installation:***
```
npm install appwrite
```
The Appwrite JavaScript SDK(Software Development Kit) provides the necessary tools and libraries to interact with Appwrite's backend services from your front-end React application. It enables you to work with various Appwrite functionalities such as database operations, storage, authentication, and more.

### TinyMCE
TinyMCE is a popular open-source JavaScript library that provides a web-based text editor. It allows users to create and edit content directly within web browsers, providing a user-friendly interface that resembles word processing software.

***Installation:***
```
npm i @tinymce/tinymce-react
```
Here, `i` is shorthand for `install`.

### React Hook Form
React Hook Form is a library that helps you build forms in React easily. It uses React's hooks, which are a way to manage state in functional components. With React Hook Form, you can create forms quickly without writing a lot of code, and it takes care of things like validation for you. It's a straightforward and efficient way to handle forms in React applications.

***Installation:***
```
npm i react-hook-form
```
Here, `i` is shorthand for `install`.

### HTML React Parser
The "HTML React Parser" is a library used in React applications to parse HTML strings into React elements. It allows you to take HTML content, such as markup from an API response or stored in a database, and convert it into a format that React can render.

***Example:***
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import parse from 'html-react-parser'; // Importing the HTML React Parser library

// Example HTML string
const htmlString = '<div><h1>Hello, World!</h1><p>This is some HTML content.</p></div>';

const App = () => {
  // Parsing the HTML string into React elements
  const reactElements = parse(htmlString);

  return (
    <div>
      <h1>HTML React Parser Example</h1>
      {/* Rendering the parsed React elements */}
      {reactElements}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

***Above element is rendered like this:***
```
HTML React Parser Example

Hello, World!
This is some HTML content.
```

***Installation:***
```
npm i html-react-parser
```
Here, `i` is shorthand for `install`.