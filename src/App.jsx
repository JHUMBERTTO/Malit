
import React from 'react'
import styles from './style'

// components
import { Navbar, Hero, Stats, Business, ExampleMenu, ExampleMenu2, CTA, Footer } from './components'

// animations
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  const renderNavbar = () => (
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  )

  const renderHero = () => (
    <div className={`bgpage mt-10 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  )

  const renderBody = () => (
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
  )

  return(
    <div className='bgpage w-full overflow-hidden bg-slate-200 dark:bg-slate-900'>
      {renderNavbar()}
      {renderHero()}
      {renderBody()}
    </div>
  )
}

export default App
