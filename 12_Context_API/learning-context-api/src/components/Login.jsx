import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

// In this, we will see how we can send data to our 'UserContext'. To do this, we use the "useContext" hook from React.

// The "useContext" hook is used to consume or set data from a React context.
function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    // The 'useContext' hook is used to consume or set data from a React context. The 'useContext' hook takes a context object as an argument. This context object is the one you created using React.createContext().

    // { setUser } - comes from the values you passed in UserContextProvider. So, that other components can access the shared data.
    const { setUser } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        setUser({ userName, password });
        // When you pass an object to 'setUser', it updates the 'user' state with that object, making all its properties accessible within the 'user' object. You can access these values like: user.userName and user.password.
    }

    return (
        <>
            <h2>Login</h2>
            <p>
                <input
                    type="text"
                    placeholder='user name'
                    value={userName}
                    onChange={function (e) { setUserName(e.target.value) }} />
            </p>

            <p>
                <input
                    type="text"
                    placeholder='password'
                    value={password}
                    onChange={function (e) { setPassword(e.target.value) }} />
            </p>

            <p>
                <button onClick={handleSubmit}>Submit</button>
            </p>
        </>
    )
}

export default Login