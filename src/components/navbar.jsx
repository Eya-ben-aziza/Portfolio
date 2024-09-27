import React from 'react'

const Navbar = () => {
  return (
    <>
     <header>
                <nav className="navbar">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <hr className="fineline"></hr>
                        <li><a href="/experiences">experiences</a></li>
                        <hr className="fineline"></hr>
                        <li><a href="/projects">projects</a></li>
                        <hr className="fineline"></hr>
                        <li><a href="/contact">contacts</a></li>
                    </ul>
                              
                </nav>
     
        </header>
    </>
  )
}

export default Navbar
