/*
Naming Conventions:
1. Folder Name is usually set as "context", it represent all the context files are present inside this folder.
2. Context Files are purely JavaScript file, because all the code written inside context is purely JavaScript code. That's why we created this file with ".js" extension.
*/

import React from "react";

// Creating Context Object using `createContext()` - This context object will hold the data that you want to share across your application.
const UserContext = React.createContext();

// Now, export the context object so that we can use it in other parts of our application.
export default UserContext;

