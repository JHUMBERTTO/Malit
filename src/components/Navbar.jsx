import { useEffect, useState } from 'react'
import {close, language, logo, menu } from '../assets'
import { navLinks } from '../constants'
import DarkButton from './DarkButton'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
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
        <DarkButton />
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
