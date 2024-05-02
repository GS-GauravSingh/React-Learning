## Question 1: How to create a react project ?
There are multiple ways to create a new React project, and using Create React App utility and Vite are two popular options.

### Create React App (It's a time consuming process)
Create React App (CRA) is a utility or tool that allows you to create a new React project.

### Command:
```
    npx create-react-app foldername
```

#### Breakdown of above command:
##### npm
When you install Node.js, there is one tool that comes along with it: npm (Node Package Manager). "npm" is a package manager tool that allows you to download and install packages or libraries.

##### npx
"npx" indeed stands for "Node Package eXecute" or "Node Package Executor." It's a command-line tool that comes with npm (Node Package Manager) and is used for executing packages without the need to install them on your system.

##### create-react-app
"create-react-app" is an npm package that sets up a new React project for you.

##### flodername
create-react-app create a new folder with the name you specify and all your react file will be present in that folder.


### Using Vite (Faster Method)
Vite is a tool that sets up a development environment for you.

### Command:
```
    npm create vite@latest
```

### Additional step after executing above command:
1. After executing the above command, You'll be prompted to enter the name of your project (folder name). This is the directory where your project files will be generated.
2. You'll be asked to select the library/framework you want to use for your project. In this case, since you're creating a React project, you would choose React from the list of available options.
3. After selecting the library (React), you may be prompted to choose a variant or template for your project. For example, you might be given options for using JavaScript, TypeScript, or other configurations. Select JavaScript.

### Command
After creating your React project with Vite using the steps above steps. It's time to install this node_modules folder that contains all the necessary libraries or packages that are important for your React project to function properly. 
```
    npm install
```

### Shortcut (i is a short form for install)
```
    npm i
```