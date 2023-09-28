import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div data-aos='fade-up' data-aos-duration='1300' data-aos-anchor-placement='center-bottom' className={` flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card bg-slate-200 dark:bg-slate-800`}>
    <div className={`w-[64px] h-[64px] ${styles.flexCenter} `}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-black  text-[18px] leading-[23px] mb-1 dark:text-white '>
        {title}
      </h4>
      <p className='font-poppins font-normal text-black text-[16px] leading-[24px] mb-1 dark:text-white'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (
  <section id='servicio' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>MALIT</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
        Tu mejor opcion para volver tu negocio mas inteligente, contactanos para recibir un servicio personalizado
      </p>
      <Button />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

export default Business
