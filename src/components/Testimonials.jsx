import {feedback} from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative'>
      <h1 className={styles.heading2}>Lo que la gente dice <br className='sm:block hidden'/> sobre nosotros</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Todo lo que necesitas para ahcer la carta menu de tu negocio digital a precio increible</p>
      </div>
    </div>
    
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative '>
      {feedback.map((card) =>(
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
  )


export default Testimonials