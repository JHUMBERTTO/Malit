import { exampleMenu } from '../assets'
import styles, { layout } from '../style'

import React from 'react'

const ExampleMenu = () => (
  <div className='bg-slate-100 dark:bg-slate-900'>
    <section id='product' className={layout.sectionReverse}>
      <div data-aos='fade-right' data-aos-duration='1300' data-aos-offset='300' data-time className={layout.sectionImgReverse}>
        <img src={exampleMenu} alt='ExampleMenu' className='w-[100%] h-[100%] relative z-[5] mr-20' />
      </div>
      <div className={` ml-20 ${layout.sectionInfo} `} data-aos='fade-left' data-aos-duration='1200'>
        <h2 className={styles.heading2} >¿Quieres un menú digital <br className='sm:block hidden' />fácil, moderno y rápido?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} />
      </div>
    </section>
  </div>
)

export default ExampleMenu
