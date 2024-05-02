## Always remember one thing (we already know this thing) 
The traditional way of creating websites is by using HTML, CSS, and JavaScript. If you want to make your website dynamic and interactive, then you have to use JavaScript and you have to manually inject JavaScript into your HTML using script tag and this is the only way of using JavaScript. What I mean is there is no other way that javascript can automatically injected into your HTML, you have to do it manually.


## Understanding React Files in React Project Folder
1. node_modules folder
    * node_modules folder that contains all the necessary libraries or packages that are important for your React project to function properly. 

2. public folder
    * The public folder contains the index.html file this is the only file that gets loaded and serves as the entry point of your website and all the changes, and DOM Manipulation are done dynamically using JavaScript.
    * React applications are called single-page applications (SPAs) because they dynamically rewrite the content of the current page instead of loading entire new pages from the server.

3. src folder
    * The src folder contains the index.js file this serves as the entry point of react. In the index.js file (or other components in the src folder), you write React code to manipulate the DOM.

4. .gitignore file - if you want some file that should not be tracked by git, you can mention their name inside this file.
5. package-lock.json
6. package.json
7. README.md - contains basic introduction about React.

## How does React Work?
React create it's own DOM (Document Object Model) known as Virtual DOM.
Now, Instead of manipulating Browser's DOM directly, React creates it's own Virtual DOM in memory and do all the necessary manipulations in it's own Virtual DOM and then it compares it's Virtual DOM with the Browser's DOM and if Virtual DOM is different from the Browser's DOM then it updates the Browser's DOM.

React does not update the entire Browser's DOM, Instead it updates only the parts of the actual browser DOM that have changed, rather than re-rendering the entire DOM from scratch.


## Important Point
1. When you create React Project using "create-react-app" tool, then it automatically sets up the necessary configurations for your project, including linking the JavaScript file to the HTML file during **runtime**.

2. When you create React Project using "vite" tool, then it automatically sets up the necessary configurations for your project, including linking the JavaScript file to the HTML file at **compile time**.