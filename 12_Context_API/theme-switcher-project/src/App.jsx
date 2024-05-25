import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {


  const [themeMode, setThemeMode] = useState("light");

  // See, the `lightTheme` method and `darkTheme` method are initially passed as default values when creating the context (ThemeContext) using `createContext()`. However, these functions are empty and don't have any code in their body. So, we have to define these function.
  // To define the functionality for these methods, you create separate functions with the same names (lightTheme and darkTheme) and write the code inside them. This way, the functionality will automatically be passed to those functions.
  const lightTheme = function(){
    setThemeMode("light");
  }

  const darkTheme = function(){
    setThemeMode("dark");
  }

  // Actual change in theme.
  useEffect(function(){
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);



  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
