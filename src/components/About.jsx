

const About = () => {
  return (
    <div>
        <section id="about" className="py-20 px-6 md:px-16 relative z-10">
          <div className="bg-gradient-to-br from-[#1b1036]/90 to-[#2a1a5c]/90 rounded-3xl p-8 md:p-12 backdrop-blur-lg border-2 border-[#7df9ff]/20">
            {/* Section Title */}
            <h2 className="text-4xl font-bold mb-8 text-[#ff61f6]">About Me</h2>
        
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <p className="text-[#7df9ff] text-lg leading-relaxed">
                  Passionate full-stack developer with expertise in modern web technologies. 
                  I specialize in creating dynamic, responsive applications with clean code 
                  and intuitive user experiences. When not coding, you'll find me exploring 
                  new tech trends or contributing to open-source projects.
                </p>
              </div>
        
              {/* Image Container */}
              <div className="relative group flex-1 max-w-md w-full">
                <div className="relative rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#ff5f96] to-[#7b5eff] p-1 transition-all duration-300">
                  <img 
                    src="/eya-profile.jpg" 
                    alt="Eya Ben Aziza"
                    className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
                    style={{ minHeight: '350px' }}
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-[#7df9ff]/30 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
