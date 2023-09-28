import React from 'react'
import styles from './style'
import { Navbar, Hero, Stats, Business, ExampleMenu, ExampleMenu2, CTA, Footer, SOON, Button } from './components'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  return(
  <div className='bgpage w-full overflow-hidden bg-slate-200 dark:bg-slate-900'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bgpage ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bgpage ${styles.paddingX} ${styles.flexStart} dark:bg-slate-900`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <ExampleMenu />
        <ExampleMenu2 />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)
  }
export default App
