import Navbar from '../components/Navbar'
import Home from '../components/Home'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f051d] to-[#301a68] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      <Navbar />
      <Home />
    </div>
  )
}

export default Portfolio
