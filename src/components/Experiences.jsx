import React from 'react'

const Experiences = () => {
  return (
    <div>
   
   <h2 style={{ color: 'white', margin: '60px', fontSize: '50px' }}>Experiences</h2>
        <div id="experiences" 
        style={{ color: 'white', backgroundColor: 'rgb(27, 26, 26)', marginTop: '200px', width: '90%', margin: '60px' }}
        class="container"  className="row" >
            <div className="experience" style={{ margin: '60px' }} >
                <div>
                    <h2>software developer </h2>
                    <h2>company name: google</h2>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="#" target="_blank">
                        <button >view experience</button>
                    </a>
                </div>
                
                
            </div>
            <div className="experience" class="row" style={{ margin: '60px' }}>
                <div class="column-db-6">
                    <h2>software developer</h2>
                    <h2>company name: microsoft</h2>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="#" target="_blank">
                        <button >view experience</button>
                    </a>
                </div>
               
            </div>
           
        </div>
        
    </div>
  )
}

export default Experiences
