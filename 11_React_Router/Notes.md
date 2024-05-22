## Story
In traditional websites built with HTML, CSS, and JavaScript, creating a multi-page website involves making separate HTML files for each page. For example: Each page of the website has its own HTML file (e.g., index.html for the home page, about.html for the about page, contact.html for the contact page, etc.).

These pages are then linked together using anchor tags (```<a>```), allowing users to navigate through the site via a navigation menu. Like this:
```
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
```

And when a user clicks on an anchor link (```<a>``` tag), the browser fetches the new HTML file along with its CSS and JavaScript. This process involves fetching and rendering the new page, which means the entire Document Object Model (DOM) is recreated for each page load. In short, ***The browser reloads the entire page, recreating the DOM from the new HTML file, which can be slow and inefficient.***

## What is React Router ?
React is used to create Single-Page Applications (SPAs), which load a single HTML file and update the content dynamically without full-page reloads. If you use traditional anchor links (```<a>```) for navigation purpose in a React app, it causes a full-page reload, which defeats the purpose of an SPA.

### How React Router Helps
React Router is a popular library used with React (it's not a part of React; it's a separate library) to manage navigation within the application.  Instead of reloading the entire page, React Router updates the URL and dynamically renders the appropriate components without refreshing or reloading the page. 

### React Router Installation Steps
```
// first create a react project using create-react-app or vite
// cd into your newly created react project
// run the below command to install React Router
npm install react-router-dom
```

### React Router Link Component
The ```<Link>``` component is provided by React Router for navigation purposes. It's used to create clickable links within your application. Instead of traditional anchor tags (```<a>```), which would cause a full page reload, ```<Link>``` updates the URL and renders the appropriate component without reloading the entire page.

The ```<Link>``` component in React Router is a self-closing tag. 

To use ```<Link>```, you have import it form the `react-router-dom`, like this

```import { Link } from "react-router-dom";```

#### Syntax of ```<Link>```:
```
<Link to="/path" />
```

Here's the breadown of above syntax:
1. ```<Link>```: This is the component provided by React Router for creating navigation links.
2. to="/path": "to" is an attribute that specifies the path that the link should navigate to when clicked.
3. You would replace "/path" with the actual path you want the link to navigate to.

### React Router NavLink Component
The ```<NavLink>``` is a component in React Router that's used for creating navigation links in your application. It's similar to the regular ```<Link>``` component, but it adds extra features, like automatically applying styles to the link when it matches the current URL.

To use ```<NavLink>```, you have import it form the `react-router-dom`, like this

```import { NavLink } from "react-router-dom";```

#### Syntax of ```<NavLink>```:
```
<NavLink to="/path">Link Text</NavLink>
```

Here's a breakdown of the syntax:
1. ```<NavLink>```: This is the component provided by React Router for creating navigation links.
2. to="/path": This attribute specifies the path that the link should navigate to when clicked. It defines the URL destination.
3. Link Text: This is the text or content that will be displayed as the clickable link.

#### Important Properties (Props)
The `<NavLink>` components come with props (properties), these props can be used to style the `<NavLink>` component.

1. `to`: 
    * This attribute specifies the path that the link should navigate to when clicked. It defines the URL destination.
    * The `to` is equivalent to the `href` in the `<a>`. This means that when the `to` prop renders on the DOM it returns a `href` attribute.

2. `style`
    * The style property in JSX is used to apply CSS styles to a particular element. In the case of `<NavLink>`, the style property can accept a callback function that takes two parameters: `isActive` and `isPending`.

        * `isActive`: This parameter is a function that returns true if the current URL matches the path specified in the to property of the NavLink, indicating that the link is currently active.

        * Example:
            ```
            <NavLink to="/"
            style={ ({ isActive }) => {
            return isActive ? { color: "orange" } : {color: "gray"};
            } }>
            Home
            </NavLink>
            ```

        * `isPending`: The `isPending` function is used to set what style should apply to the link when a user clicks on it and the link is still in the navigating phase and is not yet complete.

3. `className`
    * The `className` property is used to add classes to a particular HTML element in JSX. In the case of `<NavLink>`, the `className` property can also accept a callback function that takes two parameters: `isActive` and `isPending`.

Now, read the documentation of React Router and start using it. Documentation Link: https://reactrouter.com/en/main