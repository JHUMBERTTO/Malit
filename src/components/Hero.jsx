import { menus } from '../assets'
import styles from '../style'

const Hero = () => (
  <section id='inicio' className={`flex md:flex-row justify-between flex-col ${styles.paddingY} dark:bg-slate-900`}>
    <div data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine' data-aos-duration='1200' className='flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6 dark:bg-slate-900'>
      <div className='flex flex-row justify-between items-center w-full dark:bg-slate-900'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px] dark:text-slate-100'>
          Transforma tus
          <br className='sm:block hidden' /> {' '}
          <span className='text-black dark:text-slate-100'> Menús en </span> {' '}
        </h1>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full dark:text-slate-100'>Experiencias Digitales</h1>
      <p className={`${styles.paragraph} text-black max-w-[470px] mt-5 mb-10 dark:text-slate-100`}>
        Descubre cómo nuestro servicio de creación de menús digitales,
        puede aumentar la interacción y satisfacción de tus clientes.
      </p>
    </div>
    <div className='flex justify-end'>
      <img src={menus} alt='menus' data-aos='fade-left' data-aos-offset='300' data-aos-easing='ease-in-sine' data-aos-duration='1200' className='w-[100%] h-[100%] relative mr-0 ' />
    </div>
  </section>
)

export default Hero
