
import  styles from './App.module.css'
import Hero from './components/Hero/hero'
import { Navbar } from './components/Navbar/nav'
import { Aboutus } from './components/about/about'
import  Experience  from './components/experienece/experience'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
    <div className={styles.app}>
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Experience/>
      <Projects/>
    </div>
    </>
  )
}

export default App
