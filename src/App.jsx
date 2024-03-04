
import  styles from './App.module.css'
import Hero from './components/Hero/hero'
import { Navbar } from './components/Navbar/nav'

function App() {

  return (
    <>
    <div className={styles.app}>
      <Navbar/>
      <Hero/>

    </div>
    </>
  )
}

export default App
