import imgProfile from '../assets/profilepic.jpg';

const About = () => {
  return (
    <div>
        <section id="about" className="py-20 px-6 md:px-16 relative z-10">
          <div className="bg-gradient-to-br from-[#0f051d]/90 to-[#1b1036]/90 rounded-3xl p-8 md:p-12 backdrop-blur-lg border-2 border-[#7df9ff]/20">
            {/* Section Title */}
            <h2 className="text-4xl font-bold mb-8 text-[#ff61f6]">About Me</h2>

            <div className="flex flex-col md:flex-row gap-12 items-center"> 
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <p className="text-[#7df9ff] text-lg leading-relaxed">
                Passionate full-stack developer with expertise in modern web technologies. 
                I specialize in building dynamic, responsive applications with clean code and intuitive user experiences.
                Proficient in frontend and backend development, object-oriented programming, and database management, 
                I thrive in agile environments, delivering high-quality software solutions. Committed to continuous 
                learning and innovation.
                </p>
              </div>

              {/* Image Container */}
              <div className="group w-64 h-64 shrink-0">
                <img 
                  src= {imgProfile} 
                  alt="Eya Ben Aziza"
                  className="w-full h-full rounded-2xl object-cover transform transition-transform duration-300 
                           group-hover:scale-105 shadow-xl hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
