## Question 1: What is React JS ?
React.js, commonly referred to as React, is an open-source JavaScript library used for building ***Dynamic*** and ***Interactive*** user interfaces (UI) on the web. It makes it easy to manage and build complex front end.

React itself is a JavaScript library primarily used for building user interfaces. However, it comes with several other libraries or packages that extend its functionality, such as React DOM and React Native. If you're developing web applications, you can use React along with React DOM for rendering components in web browsers because React DOM provides methods and utilities for interacting with the Document Object Model (DOM) of web browsers. On the other hand, if you're building mobile applications for iOS and Android platforms, you would use React along with React Native, which allows you to create native mobile apps using React and JavaScript.

#### Important Points:
1. React was created by Jordan Walke, a software engineer at Facebook. 
2. React is used to build single-page applications.
3. One of the key features of React is it allows us to make reusable UI components. 
4. In the end, your react code gets compiled into HTML, CSS, and JavaScript and then the browser renders these files to show your content (Web App or Web Site) because browsers only understand HTML, CSS, and JavaScript. They don't understand React and it is not recommended to use React in small frontend projects because converting React code into HTML, CSS, and JavaScript files is a time-consuming process. React is useful when we are dealing with complex frontends.

## Question 2: Why React was created ?
There is one story behind this and the story goes like, There is one problem in the facebook website and the problem is at the top of the facebook there is one chat icon, which show the count of the people who messaged you and when you click on that chat icon, a dialog box appearc and you can directly open the messages sent by your connections. But the problem is, after viewing the message that count that chat icon is showing does not go away. Idealy, when a person see his unread messages that count must go away but in this case it doesn't.

And this problem actually the source of React.

#### Reason behind this Problem:
See, HTML defines the structure, CSS styles the elements, and JavaScript adds functionality and interactivity.
So, JavaScript is responsible for interacting with the Document Object Model (DOM) to show the count of unread messages. This is a common approach in web development for updating content dynamically based on user interactions or backend data. The problem arises from a lack of proper synchronization between the JavaScript code and the DOM. This lack of synchronization could lead to the issue where the count of unread messages doesn't update correctly after messages are viewed.


