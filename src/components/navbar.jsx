
const Navbar = () => {
  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-[#ff61f6]">Eya Ben Aziza</h1>
        <div className="space-x-8 hidden md:flex">
          <a href="#home" className="hover:text-[#7df9ff] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#7df9ff] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#7df9ff] transition-colors">Skills</a>
          <a href="#education" className="hover:text-[#7df9ff] transition-colors">Education</a>
          <a href="#projects" className="hover:text-[#7df9ff] transition-colors">Projects</a>
        </div>
      </nav>
  )
}

export default Navbar
