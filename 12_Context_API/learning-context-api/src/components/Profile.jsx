import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

// In this will will see how can we consume data from context.

function Profile() {

    // The 'useContext' hook is used to consume or set data from a React context. The 'useContext' hook takes a context object as an argument. This context object is the one you created using React.createContext().

    // { user } - comes from the values you passed in UserContextProvider. So, that other components can access the shared data.
    const { user } = useContext(UserContext);

    if (!user) {
        return <>Please log in</>
    }
    else {
        return (<>
            <p>
                Welcome {user.userName}
            </p>
            <p>
                Your Password: {user.password}
            </p>
        </>)
    }
}

export default Profile