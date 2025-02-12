import PropTypes from 'prop-types';
import css from '../assets/css.png'
import html from '../assets/html.png'
import nest from '../assets/nest.png'
import node from '../assets/node.png'
import postgres from '../assets/postgres.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'



const Skills = () => {
  return (
    
    <section id="skills" className="py-20 px-6 md:px-16 relative">
    <div className="relative bg-gradient-to-br from-[#0f051d]/90 to-[#1b1036]/90 rounded-3xl p-8 md:p-12 backdrop-blur-lg border-x-2 border-[#7df9ff]/10 overflow-hidden">
      {/* Top Border Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#ff61f6] to-transparent" />
      
      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#7df9ff] to-transparent" />
      
      {/* Title Container */}
      <div className="mb-16 text-center">
        <div className="inline-block bg-[#0f051d]/70 px-8 py-4 rounded-2xl border-b-2 border-transparent bg-gradient-to-r from-[#ff61f6]/30 to-[#7df9ff]/30 bg-bottom bg-no-repeat bg-[length:100%_2px]">
          <h2 className="text-xl font-normal text-white">Skills</h2>
        </div>
      </div>
  
      {/* Scrolling Skills Container */}
      <div className="relative w-full overflow-hidden">
        {/* Double the content for seamless looping */}
        <div className="flex animate-marquee gap-8 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <SkillBox key={index} {...skill} />
          ))}

        </div>
  
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f051d] to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f051d] to-transparent z-20" />
      </div>
    </div>
  </section>
    
      )
} 

export default Skills


// SkillBox Component
const SkillBox = ({ name, logo }) => (
    <div className=" flex-col content-center justify-items-center flex-shrink-0 group relative h-32 w-32 rounded-xl bg-[#1b1036]/90 backdrop-blur-lg border-2 border-[#7df9ff]/10 hover:border-[#ff61f6]/30 transition-all duration-300 p-4">
        <img
          src={logo} 
          alt={name}
          className="h-1/2 w-1/2 object-cover max-w-full max-h-full invert opacity-80 hover:opacity-100 transition-opacity rounded-lg pb-1.5"
          />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
          {name}
        </div>
    </div>
    
  );
  
  const skills = [
    { name: 'React', logo: react },
    { name: 'TypeScript', logo: typescript },
    { name: 'Node.js', logo: node },
    { name: 'PostgreSQL', logo: postgres },
    { name: 'Tailwind', logo: tailwind },
    { name: 'NestJS', logo: nest },
    { name: 'CSS', logo: css },
    { name: 'HTML', logo: html },
  ];

SkillBox.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  };