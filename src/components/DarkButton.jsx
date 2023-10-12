import { useEffect, useState } from 'react'
const DarkButton = () => {
    const [theme, setTheme] = useState(() => {
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         return "dark"
        }
        return "light"
        });
      useEffect(()=>{
        if(theme == "dark"){
          document.querySelector("html").classList.add("dark")
        }else{
          document.querySelector("html").classList.remove("dark")
        }
      },[theme])
      const handleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
      }
      
  return (
    <div>
    <button 
        onClick={handleTheme}
        className=" hover:scale-110 transition-all !sm:mr-10  p-1 bg-transparent border-none !sm:mr-10 "
    >
    {theme === 'light' ? "🌝" :"🌚" }
    
    </button>
    </div>
  )
}

export default DarkButton
