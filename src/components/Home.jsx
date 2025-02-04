import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <section id="home" className="pt-32 px-6 md:px-16 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 space-y-8 z-10 mb-12 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight">
            Hey, I'm <span className="text-[#ff61f6]">Eya Ben Aziza</span><br/>
            Web Developer
          </h1>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaGithub className="h-8 w-8 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaLinkedin className="h-8 w-8 text-white" />
            </a>
          </div>

          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-[#ff5f96] to-[#7b5eff] hover:bg-blend-darken px-8 py-3 rounded-full font-semibold transition whitespace-nowrap justify-center flex items-center">
              Contact Me
            </button>
            <button className="bg-[#1b0a33] border-2 border-[#7df9ff] hover:bg-[#7df9ff]/10 px-8 py-3 rounded-full font-semibold transition whitespace-nowrap justify-center flex items-center">
              Get Resume
            </button>
          </div>
        </div>

        {/* CLI Window */}
<div className="flex-1 max-w-2xl z-10">
  <div className="relative rounded-lg p-[2px] bg-gradient-to-r from-[#eb739d] to-[#7b5eff]">
    <div className="bg-gradient-to-r from-[#0f051d] to-[#301a68] rounded-lg border-2 border-transparent">
      {/* Window Controls */}
      <div className="flex items-center px-4 py-2 border-b border-[#7df9ff]/30">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500"/>
          <div className="w-3 h-3 rounded-full bg-green-500"/>
        </div>
      </div>
      
      {/* Code Content */}
      <div className="p-6 font-mono">
        <span className="text-[#7df9ff]">const</span> coder = {'{'}
        <div className="ml-4">
          <p><span className="text-[#ff61f6]">name</span>: <span className="text-[#7df9ff]">'Eya Ben Aziza'</span>,</p>
          <p><span className="text-[#ff61f6]">skills</span>: [{
            ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NestJS', 'Tailwind', 'Postgres', 'Node.js']
              .map((skill, i) => (
                <span key={i} className="text-[#7df9ff]">'{skill}'{i < 8 ? ', ' : ''}</span>
              ))
          }],</p>
          <p><span className="text-[#ff61f6]">hardWorker</span>: <span className="text-[#7df9ff]">true</span>,</p>
          <p><span className="text-[#ff61f6]">quickLearner</span>: <span className="text-[#7df9ff]">true</span>,</p>
          <p><span className="text-[#ff61f6]">problemSolver</span>: <span className="text-[#7df9ff]">true</span>,</p>
          <p><span className="text-[#ff61f6]">hireable</span>: <span className="text-[#ff61f6] font-bold">Highly Recommended</span></p>
        </div>
        {'}'}
      </div>
    </div>
  </div>
</div>
      </section>
    </div>
  )
}

export default Home
