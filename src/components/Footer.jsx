import styles from '../style'
import { socialMedia } from '../constants'

const Footer = () => (
  <section id='nosotros' className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-20`}>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#000000]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-black'>MALIT 2023. Todos Los Derechos Reservados.</p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <a href={social.link} target='_blank' rel='noreferrer'>
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer
