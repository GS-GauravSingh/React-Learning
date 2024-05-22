import React from 'react'

// The useParams hook provided by React Router is used to access parameters that are passed in the URL.

// When a URL contains dynamic segments, such as /users/:userId, useParams allows you to access the userId parameter.
import { useParams } from 'react-router-dom'

function User() {

    // The useParams hook returns an object containing key-value pairs of the parameters extracted from the URL.

    // For instance, if your route is defined like this: /users/:userId, and you have a URL like /users/123, calling useParams() will return an object like this: { userId: '123' }.
    const {userID} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>User: {userID}</div>
  )
}

export default User