/*
Best Practices: 
If your custom hook is returning jsx code then you must create .jsx file four your custom hook.
But in majority of cases, hooks or custom hooks return javascript code that's why we create javascript file while creating custom hooks.

Points:
1. You can use in-built hooks provided by React when creating a custom hook.
2. Custom Hook file name -> use + followed by hook name. When creating custom hooks in React, it's a common convention to name the file starting with "use" followed by the hook name. This convention helps to signify that the file contains a custom hook.
*/

import { useEffect, useState } from "react";

// Custom Hook - as we know that Hooks are simple JavaScript Function.
function useCurrencyInfo(currency) {

    // State variable for storing the JSON Data.
    const [data, setData] = useState({});

    useEffect(function () {

        // Inside this function, I am going to call an API and this API will return information about the currency exchange rates. For example: 1USD = 82INR etc. 
        const response = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);

        response.then(function (res) {

            // When you use the fetch() API in JavaScript to make HTTP or HTTPS requests, the data you receive from the response is typically in the form of a string. If you're expecting JSON data, you need to convert this string into a JavaScript object (JSON format). 
            return res.json();
        })
        .then(function (res) {
            // this will received the data in JSON format and we have to hold that data into a variable.
            setData(res[currency]);
        })

    }, [currency]);

    return data;
}

export default useCurrencyInfo;

