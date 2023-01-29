import {exampleMenu2} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const ExampleMenu2 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>zzzzzzzzzzzzz <br className='sm:block hidden'/> zzzzzzzzzzzzz</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      zzzzzzzzzzzzzzzzzzzzzz
      zzzzzzzzzzzzzzzzzz
      zzzzzzzzzzzzzzzzzzzzzz
      zzzzzz
    </p>
    <Button styles='mt-10'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={exampleMenu2} alt="ExampleMenu2" className='w-[100%] h-[100%]' />

    </div>
  </section>
  )


export default ExampleMenu2