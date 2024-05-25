// To create a "context provider", you just need to wrap all the components who wants access to shared data inside the context object you have created.

// So, we have to write jsx, that's why we create jsx file.

import React, { useState } from "react";
import UserContext from "./UserContext";

// We need to wrap components, that's we we have to create function tht returns jsx code.
// "children" - "children" is nothing but a react component that needs access to shared data.
function UserContextProvider({children}){

    // Creating some demo data to share.
    const [user, setUser] = useState(null);

    return(

        // -----------------------------
        /*
        You cannot wrap like this,
        <UserContext>
            {children}
        </UserContext>
        */
        
        /*
        // -----------------------------
        You need to access one property name 'Provider',
        <UserContext.Provider>
            // Place Components that need access to the shared data
        
            // Children is nothing but a react component that needs access to shared data. 
            {children}
        </UserContext.Provider>
        */
        
       /*
       // -----------------------------
        // Above code with "Provider" property is also not correct, because you need to provide value or data that you want other components to access.

        // The Provider component must include a "value" prop to provide the data that other components will access. Without the "value" prop, the context would not have any data to share with its descendant components.
        */

        // "value" prop accepts an object - you can pass an object containing all the values you want to share. 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContextProvider;
