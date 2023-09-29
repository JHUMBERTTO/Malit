import { useEffect, useState } from 'react'
import { close, language, logo, menu } from '../assets'
import { navLinks } from '../constants'
import DarkButton from './DarkButton'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center z-10  fixed top-0 w-full bg-slate-200 dark:bg-slate-900 p-5">
      <div className="flex inset-x-0">
        <img src={logo} alt="Malit" className="dark:invert transition-all mr-[50%]" />
        <div className="hidden sm:block sm:w-1/3">
          {/* Contenido del elemento 1 */}
        </div>

        <ul className="list-none sm:flex hidden items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`hover:text-orange-600 mt-3 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black dark:text-slate-100 dark:hover:text-orange-400`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:w-1/3">
          <div className=" sm:flex hidden fixed right-10">
            <DarkButton />
          </div>
        </div>
      </div>

      <div className="sm:hidden fixed right-10  z-[11]">
        
        <div>
          <button  src={toggle ? close : menu} className="w-[40px] h-[25px] dark:invert relative group" onClick={() => setToggle(prev => !prev)}>
            <img src={toggle ? close : menu} alt="menu" className="w-[40px] h-[25px]  relative group " />
          </button>
        </div>
        <div
          className={`${
            toggle ? 'fixed' : 'hidden'
          } p-6 glass z-6 absolute top-[-60px] right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>

            ))}
            <div className='mt-3'>
            <DarkButton />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
