import Navbar from './section/Navbar.jsx'
import Hero from './section/Hero.jsx'
import './App.css'
import About from './section/About.jsx'
import Project from './section/Projects.jsx'
import Contact from './section/Contact.jsx'
import Footer from './section/Footer.jsx'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
