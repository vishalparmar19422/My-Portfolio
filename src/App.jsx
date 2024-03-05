
import  styles from './App.module.css'
import Hero from './components/Hero/hero'
import { Navbar } from './components/Navbar/nav'
import { Aboutus } from './components/about/about'

function App() {

  return (
    <>
    <div className={styles.app}>
      <Navbar/>
      <Hero/>
      <Aboutus/>

    </div>
    </>
  )
}

export default App
