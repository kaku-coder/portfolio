import Navbar from './section/Navbar.jsx'
import Hero from './section/Hero.jsx'
import './App.css'
import About from './section/About.jsx'
import Project from './section/Projects.jsx' 
import Contact from './section/Contact.jsx'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
    <Project/>
    <Contact/>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      {/* contact */}
      {/* foter */}
    </div>
  )
}

export default App
