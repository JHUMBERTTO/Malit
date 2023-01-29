import { exampleMenu } from '../assets'
import styles, {layout} from '../style'

import React from 'react'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={exampleMenu} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>ZZZZZZZZZZZZZZZZZZZZZ<br className='sm:block hidden'/>zzzzzzzzzzz</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>zzzzzzzzzzzzzzzzzz
      zzzzzzzzzzzzzzzzzzzzzzzz
      zzzzzzzzzzzzzzzzzzzzzz
      ZZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
    </div>
  </section>    
)

export default Billing