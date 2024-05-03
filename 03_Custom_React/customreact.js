// Storing the reference of HTML element having id set to root.
// So, that we can render react componets inside this HTML element.
// React is basically JavaScript and in this, we are going to see how react work internally.
const mainContainer = document.querySelector("#root");

// Creating a react element.
// End of the day, react components (functions) are converted into this Object form.
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

// Now we have to render the above element "reactElement" inside that HTML element having id set to root.
customRender(reactElement, mainContainer);

// Creating Custom Function to render HTML elements.
function customRender(reactElement, container)
{
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);
    
    // container.appendChild(domElement);
    
    // Updated version of above code.
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const key in reactElement.props) {
        domElement.setAttribute(key, reactElement.props.key);
    }

    container.appendChild(domElement);
}