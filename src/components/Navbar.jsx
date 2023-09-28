import { useEffect, useState } from 'react'
import {sunmoon,close, language, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
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
    <nav className='flex items-center justify-end navbar transition-all'>
      <div className='w-full flex py-6 items-start justify-between navbar '>
        <img src={logo} alt='Malit' className='w-[150px] h-[50px] flex dark:invert transition-all' />
        <div>
          <div>
            {/* enicma de navbar */}
          </div>
          <ul className='list-none sm:flex hidden justify-start items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`hover:text-orange-600 mt-3 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black dark:text-slate-100 dark:hover:text-orange-400`}
              >
                <a href={`#${nav.id}`} >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button 
          onClick={handleTheme}
          className="relative w-10 h-10 p-1 bg-transparent border-none"
        >
          <img 
            src={sunmoon} 
            alt="Sun and Moon" 
            className={`w-full h-full dark:invert ${theme === 'light' ? 'filter brightness-75' : ''} hover:scale-110 transition-all`}
          />
          
        </button>
      </div>

      <div className='sm:hidden flex flex-1 justify-end fixed z-[10]'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[40px] h-[25px] dark:invert '
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'fixed' : 'hidden'} p-6 glass z-[6] absolute top-[-60px]  right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1 '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
