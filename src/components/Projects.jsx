import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const projects = [
        {
          title: 'E-Commerce Platform',
          tech: 'React / NestJS / Postgres',
          description: `const project = {
      name: 'ShopHub',
      stack: ['React', 'TypeScript', 'NestJS', 'Postgres'],
      features: ['Cart System', 'Payment Gateway', 'Admin Dashboard']
    }`,
          link: '#'
        },
        {
          title: 'Social Media App',
          tech: 'Next.js / GraphQL / MongoDB',
          description: `const project = {
      name: 'SocialSphere',
      stack: ['Next.js', 'Apollo', 'MongoDB'],
      features: ['Real-time Chat', 'Post Sharing', 'Notifications']
    }`,
          link: '#'
        },
        {
          title: 'Task Manager',
          tech: 'React Native / Firebase',
          description: `const project = {
      name: 'TaskFlow',
      stack: ['React Native', 'Firebase', 'Redux'],
      features: ['Cross-platform', 'Offline Sync', 'Teams']
    }`,
          link: '#'
        }
      ];
  return (
    <div>
         <section id="projects" className="min-h-screen py-20 px-6 md:px-16 relative">
      <div className="relative bg-gradient-to-br from-[#0f051d]/90 to-[#1b1036]/90 rounded-3xl p-8 md:p-12 backdrop-blur-lg border-x-2 border-[#7df9ff]/10 justify-center items-center flex flex-col">
        {/* Title Box */}
        <div className="mb-20 text-center">
          <div className="inline-block bg-[#0f051d]/70 px-8 py-4 rounded-2xl border-b-2 border-transparent bg-gradient-to-r from-[#ff61f6]/30 to-[#7df9ff]/30 bg-bottom bg-no-repeat bg-[length:100%_2px]">
            <h2 className="text-xl font-normal text-white">Projects</h2>
          </div>
        </div>

        {/* Projects Container */}
        <div className="relative h-[800px] w-3/4">
          {projects.map((project, index) => (
            <ProjectBox 
              key={index}
              project={project}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}

const ProjectBox = ({ project, index, activeIndex, setActiveIndex }) => {
    const [ref, inView] = useInView({
      threshold: 0.5,
      triggerOnce: false
    });
  
    useEffect(() => {
      if (inView) {
        setActiveIndex(index);
      }
    }, [inView, index, setActiveIndex]);
  
    const isActive = index === activeIndex;
    const isPrevious = index < activeIndex;
  
    return (
      <div 
        ref={ref}
        className={`absolute w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive 
            ? 'z-30 translate-y-0 opacity-100 scale-100'
            : isPrevious
              ? 'z-20 translate-y-[-50%] opacity-50 scale-90'
              : 'z-10 translate-y-[70%] opacity-30 scale-75'
        }`}
        style={{ top: `${index * 25}%` }}
      >
        <div className="relative group bg-gradient-to-r from-[#0f051d] to-[#301a68] rounded-xl p-[2px] shadow-2xl">
          <div className="bg-gradient-to-r from-[#0f051d] to-[#301a68] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <span className="text-[#ff61f6] text-sm">{project.tech}</span>
            </div>
            
            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg">
              <pre className="text-white">{project.description}</pre>
            </div>
  
            <div className="mt-6 flex justify-end">
              <a
                href={project.link}
                className="px-4 py-2 rounded-lg bg-[#ff61f6] hover:bg-[#ff85f8] text-white transition-colors"
              >
                Live Demo →
              </a>
            </div>
          </div>
          
          {/* Border Animation */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5f96] to-[#7b5eff] opacity-0 group-hover:opacity-30 transition-opacity -z-10" />
        </div>
      </div>
    );
  };

export default Projects
