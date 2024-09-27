import React from 'react'


const Contact = () => {
  return (
    <div>
      
      <h2 style={{ color: 'white', margin: '60px', fontSize: '50px' }}>Contact Me</h2>

  <div id="contacts">
    <div className="contact-Info">
      <div className="contact-Item">
        <i className="fa fa-phone" />
        <p>Phone number: +21658468249</p>
      </div>

      <div className="contact-Item">
        <i className="fa fa-envelope" />
        <p>
          Email address: <a href="mailto:eyabenaziza11@gmail.com" style={{ textDecoration: 'none', color: 'rgb(201, 154, 154)' }}>eyabenaziza11@gmail.com</a>
        </p>
      </div>

      <div className="contact-Item">
        <i className="fa fa-map-marker" />
        <p>Address: Located in Tunisia</p>
      </div>
    </div>

    <div className="media-profiles" style={{ marginTop: '50px' }}>
      <a href="#" target="_blank" className="social-icon">
        <i className="bi bi-facebook" />
      </a>

      <a href="#" target="_blank" className="social-icon">
        <i className="bi bi-linked" />
      </a>

      <a href="#" target="_blank" className="social-icon">
        <i className="bi bi-github" />
      </a>
    </div>
  </div>
    </div>
  )
}

export default Contact
