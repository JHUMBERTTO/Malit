import { exampleMenu } from '../assets'
import styles, {layout} from '../style'

import React from 'react'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={exampleMenu} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>¿Quieres un menú digital <br className='sm:block hidden'/> fácil, moderno y rápido? </h2>

    </div>
  </section>    
)

export default Billing