// Different approach for creating context.
// In the previous approach we are creating Context and Context Provider in a two separate file. But in this approach we will how we can create both the Context and Context provider in a single file using a shorter syntax.
import { createContext, useContext } from "react";

// Creating Context Object using `createContext()` - This context object will hold the data that you want to share across your application. Now, `createContext()` function also accepts a default value as an argument. 

// Usually, a Context Provider is used to provide values or data that a context stores so other components can access it. However, when the context is initially created and there is no context provider present, then these default values are present in the context. These default values represent the initial data or values that the context holds.

// Also note that we are exporting the context (e.g., 'ThemeContext') in the same line, though it can also be exported on a separate line. It's just a shorter syntax.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: function () { },
    lightTheme: function () { },
});


/*
// Creating Context Provider.
// In this we are providing direct access to Context Provider. So, if you want other components can access the Context Data, then you can simply wrap all the other components inside the "ThemeProvider" and in the "ThemeProvider" opening tag you need to pass `value` prop to specify which values you want other components have access to. Like this,

<ThemProvider value={{themeMode, darkTheme, lightTheme}}>
    <componentOne />
</ThemProvider>
*/
export const ThemeProvider = ThemeContext.Provider;

// Creating a custom hook -  This custom hook, `useTheme`, makes it easier to access the `ThemeContext`.
// Instead of importing the context manually and using `useContext()` in each component to access the context data, `useTheme` does it for you. You just call `useTheme()` hook in your component, and it gives you access to the context data from context provider.
export default function useTheme(){
    return useContext(ThemeContext);
}