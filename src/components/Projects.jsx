import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      title: 'Full-Stack E-Commerce Application',
      tech: ['React', 'Vite', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'TypeORM', 'JWT'],
      features: [
        'JWT authentication system',
        'Session-based and persistent cart/wishlist functionality',
        'Product management with categorized collections',
        'Order placement with cash-on-delivery system',
        'Role-based access control and secure authentication',
        'Responsive UI with modern styling'
      ],
      description: `A full-stack e-commerce platform designed for selling women's clothing. Built with React  for a fast, 
        interactive frontend, and powered by a NestJS backend with PostgreSQL for secure 
        data management. The platform includes authentication with email verification, 
        wishlist and cart functionalities, and a cash-on-delivery order system. Users can 
        track orders and leave product reviews ensuring an engaging and user-friendly experience.`
    },
    {
      title: 'Frontend UI Projects',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      features: [
        'Pixel-perfect UI implementation',
        'Responsive design for multiple screen sizes',
        'Reusable component-based architecture',
        'Optimized styling with Tailwind CSS',
        'Enhanced accessibility and usability'
      ],
      description: `A collection of frontend projects focused on crafting seamless user 
        interfaces with React. Emphasizes precision in design, responsiveness, and 
        component reusability to ensure a consistent and engaging user experience.`
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-16 relative">
      <div className="relative bg-gradient-to-br from-[#0f051d]/90 to-[#1b1036]/90 rounded-3xl p-8 md:p-12 backdrop-blur-lg border-x-2 border-[#7df9ff]/10">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#0f051d]/70 px-8 py-4 rounded-2xl border-b-2 border-transparent bg-gradient-to-r from-[#ff61f6]/30 to-[#7df9ff]/30 bg-bottom bg-no-repeat bg-[length:100%_2px]">
            <h2 className="text-2xl font-normal text-white neon-text">Projects</h2>
          </div>
        </div>

        {/* Projects Container */}
        <div className="relative h-[1200px] w-full md:w-3/4 mx-auto">
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
  );
};

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
            ? 'z-20 translate-y-[-40%] opacity-50 scale-90'
            : 'z-10 translate-y-[60%] opacity-30 scale-75'
      }`}
      style={{ top: `${index * 40}%` }}
    >
      <div className="group relative bg-gradient-to-br from-[#0f051d] to-[#301a68] rounded-xl p-[2px] shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(125,249,255,0.3)] transition-all">
        <div className="bg-gradient-to-br from-[#0f051d] to-[#1b1036] rounded-xl p-8 h-[500px] flex flex-col">
          {/* Project Header */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#ff61f6] to-[#7df9ff] bg-clip-text text-transparent">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#7df9ff]/10 text-[#7df9ff] text-sm hover:bg-[#ff61f6]/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#6bd4da]">Key Features</h4>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li 
                    key={i}
                    className="flex items-start text-[#ff61f6] before:content-['▹'] before:mr-2 before:text-[#7df9ff]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Preview Section */}
            <div className="bg-black/50 rounded-lg p-6 font-mono border-2 border-[#7df9ff]/10">
              <div className="text-[#7df9ff] mb-4"> Project Overview</div>
              <p className="text-[#ff61f6] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5f96] to-[#7b5eff] opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
      </div>
    </div>
  );
};

export default Projects;