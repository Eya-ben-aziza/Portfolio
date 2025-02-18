import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'


const Portfolio = () => {
  return (
    // <div className="min-h-screen bg-[radial-gradient(circle_at_50%_-10%,_#301a68_30%,_#0f051d_100%)] text-white relative overflow-hidden">
    <div className="min-h-screen bg-gradient-to-r from-[#0f051d] to-[#301a68] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default Portfolio
