const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-lg">
      <h1 className="text-2xl font-bold text-[#ff61f6]">Eya Ben Aziza</h1>
      <div className="space-x-8 hidden md:flex">
        <button onClick={() => scrollToSection('home')} className="hover:text-[#7df9ff] transition-colors">Home</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-[#7df9ff] transition-colors">About</button>
        <button onClick={() => scrollToSection('experience')} className="hover:text-[#7df9ff] transition-colors">Experience</button>
        <button onClick={() => scrollToSection('skills')} className="hover:text-[#7df9ff] transition-colors">Skills</button>
        <button onClick={() => scrollToSection('education')} className="hover:text-[#7df9ff] transition-colors">Education</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-[#7df9ff] transition-colors">Projects</button>
      </div>
    </nav>
  )
}

export default Navbar
