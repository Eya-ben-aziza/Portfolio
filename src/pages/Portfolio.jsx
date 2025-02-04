import Navbar from '../components/Navbar'
import Home from '../components/Home'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_-10%,_#301a68_30%,_#0f051d_100%)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      <Navbar />
      <Home />
    </div>
  )
}

export default Portfolio
