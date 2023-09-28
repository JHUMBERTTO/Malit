import { exampleMenu2 } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const ExampleMenu2 = () => (
  <section id='soluciones' className={`dark:bg-slate-900 ${layout.section} `}>
    <div className={layout.sectionInfo} data-aos='fade-right' data-aos-duration='1200'>
      <h2 className={styles.heading2}>Lleva tu negocio al siguiente nivel <br className='sm:block hidden' /></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Únete a nosotros y lleva tu negocio al siguiente nivel con nuestro servicio de menús y QR, diseñada para mejorar la eficiencia y la experiencia del cliente en tu restaurante.</p>

      <Button styles='mt-5' />
    </div>
    <div className={layout.sectionImg}>
      <img src={exampleMenu2} alt='ExampleMenu2' className='w-[98.5%] h-[98.5%]' data-aos='fade-left' data-aos-duration='1300' data-aos-offset='300' />
    </div>
  </section>
)

export default ExampleMenu2
