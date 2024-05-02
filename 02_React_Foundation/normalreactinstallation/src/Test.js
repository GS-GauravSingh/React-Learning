/*

Best Practices:
1. Components file name - First Letter in Capital (e.g., Test, Func, App etc.)
2. Function name - First Letter in Capital (e.g., Test, Func, App etc.)
*/

function TestFunc(){
    return (
        <h3> Test Element  </h3>
        /*
            JSX cannot export multiple HTML element. 
            Example:
            <h3> Test Element  </h3>
            <p> Test Paragraph  </p>

            Above code will give an error.

            IF you want to return multiple HTML element, then just wrap all element into a single container.
            Example:
            <div>
                <h3> Test Element  </h3>
                <p> Test Paragraph  </p>
            </div>

            It's a very common problen in JSX, that's why you can return like this also,
            <>
                <h3> Test Element  </h3>
                <p> Test Paragraph  </p>
            </>
            
        */
    )
}

export default TestFunc;