import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Footer = () => {
  const color = 'text-gray-300 hover:text-white';
  return (
    <>
      <footer className='bg-gray-242424 text-white px-6 py-4'>
        <div className='mb-4 cursor-default text-center sm:text-left flex justify-center items-center'>Malit was developed by:</div>
        <div className='text-gray-400 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className="flex items-center space-x-2">
            <p className='cursor-default'>Eduardo Aguilar</p>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/aguilarr.ans" className={color}>
              <RiInstagramLine size="25"/>
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/ClexyT' className={color}>
              <RiGithubFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/ClexyT_' className={color}>
              <RiTwitterXFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/luis-eduardo-aguilar-marquez-b05569219/' className={color}>
              <RiLinkedinBoxFill size="25" />
            </a>
          </div>
          <div className='bg-slate-800 dark:bg-slate-100 sm:w-[1px] sm:h-[50px] w-[20rem] h-[1px]'/>
          <div className="flex items-center space-x-2">
            <p className='cursor-default'>Jared Portocarrero</p>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/_jared1x_/' className={color}>
              <RiInstagramLine size="25"/>
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/vaancillo' className={color}>
              <RiGithubFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/jaredmazapann' className={color}>
              <RiTwitterXFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jared-p-9aba09271/' className={color}>
              <RiLinkedinBoxFill size="25" />
            </a>
          </div>
          <div className='bg-slate-800 dark:bg-slate-100 sm:w-[1px] sm:h-[50px] w-[20rem] h-[1px]'/>
          <div className="flex items-center space-x-2">
            <p className='cursor-default'>Miguel Gonzalez</p>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/mxrenoo_/' className={color}>
              <RiInstagramLine size="25"/>
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/zMiguezz' className={color}>
              <RiGithubFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/zmiguezdev' className={color}>
              <RiTwitterXFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/hector-miguel-moreno-gonzalez-9b7999201/' className={color}>
              <RiLinkedinBoxFill size="25" />
            </a>
          </div>
          <div className='bg-slate-800 dark:bg-slate-100 sm:w-[1px] sm:h-[50px] w-[20rem] h-[1px]'/>
          <div className="flex items-center space-x-2">
            <p className='cursor-default'>Jorge Garcia</p>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.humbertto/" className={color}>
              <RiInstagramLine size="25"/>
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/JHUMBERTTO' className={color}>
              <RiGithubFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/Jhumb3rto' className={color}>
              <RiTwitterXFill size="25" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/example/' className={color}>
              <RiLinkedinBoxFill size="25" />
            </a>
          </div>
        </div>
        <div className='mt-4 cursor-default text-gray-400 text-center flex justify-center items-center sm:text-left'>
          MALIT 2023, All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;