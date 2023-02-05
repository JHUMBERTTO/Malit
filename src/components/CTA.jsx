import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section data-aos="zoom-in" data-aos-duration="1500" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-white-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col' >
      <h2 className={styles.heading2}>Sobre nosotros</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Somos una empresa especializada en soluciones digitales para restaurantes. <br/>
      Ofrecemos soluciones personalizadas para mejorar la experiencia de  los clientes y aumentar la eficiencia de los negocios.</p> 
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)


export default CTA