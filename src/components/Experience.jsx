import { CommandLineIcon } from '@heroicons/react/24/solid'
import engineer from '../assets/engineer.avif'

const Experience = () => {
  return (
    <div>
        <section id="experience" className="py-20 px-6 md:px-16 relative">
            {/* Title Container */}
            <div className="mb-16 text-center">
              <div className="inline-block bg-[#0f051d]/70 px-8 py-4 rounded-2xl border-b-2 border-transparent bg-gradient-to-r from-[#ff61f6]/30 to-[#7df9ff]/30 bg-bottom bg-no-repeat bg-[length:100%_2px]">
                <h2 className="text-xl font-normal text-white">Professional Experience</h2>
              </div>
            </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* 3D Animation Container */}
            <div className="flex-1 relative h-44 perspective-1000">
              <div className="absolute inset-0 animate-float flex justify-center items-center">
                <div className="w-1/2 h-full bg-gradient-to-tr from-[#c33dbc] to-[#05197d] rounded-xl transform rotate-x-[20deg] rotate-y-[-20deg] overflow-hidden">
                  <img 
                    src={engineer}                                              
                    alt="Tech Visualization"
                    className="w-full h-full object-cover mix-blend-screen"
                  />
                </div>
              </div>
            </div>

            {/* Experience List */}
            <div className="flex-1 space-y-8">
              {/* Experience Item 1 */}
              <div className="relative p-6 rounded-xl bg-[#1b1036]/80 border-2 border-[#7df9ff]/10 hover:border-transparent transition-all duration-300 group">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute w-full h-full bg-[conic-gradient(from_var(--x),#ff61f6_0%,#7df9ff_50%,#ff61f6_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-[#a72da1] text-2xl p-3 bg-[#0f051d] rounded-lg">
                    <CommandLineIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">FrontEnd Developer</h3>
                    <p className="text-white mt-2">Freelance</p>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative p-6 rounded-xl bg-[#1b1036]/80 border-2 border-[#7df9ff]/10 hover:border-transparent transition-all duration-300 group">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute w-full h-full bg-[conic-gradient(from_var(--x),#ff61f6_0%,#7df9ff_50%,#ff61f6_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-[#a72da1] text-2xl p-3 bg-[#0f051d] rounded-lg">
                    <CommandLineIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white"> C++ Software Engineering Intern</h3>
                    <p className="text-white mt-2"> Maschinenfabrik Reinhausen</p>
                  </div>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative p-6 rounded-xl bg-[#1b1036]/80 border-2 border-[#7df9ff]/10 hover:border-transparent transition-all duration-300 group">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute w-full h-full bg-[conic-gradient(from_var(--x),#ff61f6_0%,#7df9ff_50%,#ff61f6_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-[#a72da1] text-2xl p-3 bg-[#0f051d] rounded-lg">
                    <CommandLineIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white"> C++ Developer Intern</h3>
                    <p className="text-white mt-2">STMicroelectronics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Experience


