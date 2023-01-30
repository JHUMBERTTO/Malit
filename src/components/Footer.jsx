import styles from '../style'
import { logo } from '../assets'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <img src={logo} alt="malit" className='w-[266px] h-[72px] object-contain' />
      <p className={`${styles.paragraph} mt-4 mr-20 max-w-[310px]`}>Una nueva forma a de hacer mas higienico tu lugar de comida</p>
    <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
      {footerLinks.map((footerLink)=>(
        <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
          <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-black'>
            {footerLink.title}
          </h4>
          <ul className='list-none mt-4'>
            {footerLink.links.map((Link, index)=> (
              <li key={Link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0' }`}>
                {Link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-black'>Malit 2023. Todos Los Derechos Reservados.</p>
      <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social, index) =>(
              <img 
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
              />
            ))}
      </div>
    </div>
  </section>
)

export default Footer