import React from 'react'

const Projects = () => {
  return (
    <div>
      <h2 style={{ color: 'white', margin: '60px', fontSize: '50px' }}>Projects</h2>
        <div id="Projects" style={{color: 'white'}} className="projectContainer">
            <div className="project">
                <img src="src/assets/proj1Pic.jpg" alt="proj1 picture" className="projectImage"></img>
                <h2>project1</h2>
                <br></br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsum odit incidunt fugiat nisi praesentium nostrum reprehenderit quam suscipit magnam facilis illum reiciendis qui quasi nihil iusto, provident aperiam amet?</p>
            </div>
            <div className="project">
                <img src="src/assets/proj2Pic.jpg" alt="proj2 picture" className="projectImage"></img>
                <h2>project2</h2>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt aliquam odio neque hic, sit omnis natus dolorem et magnam cumque ratione quia, laudantium esse sed veritatis, vel eligendi rerum.</p>
            </div>
            <div className="project">
                <img src="src/assets/proj3Pic.jpg" alt="proj3 picture" className="projectImage"></img>
                <h2>project3</h2>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil reiciendis beatae doloribus, similique dolore possimus tenetur maiores, quod aperiam repellendus minus maxime esse suscipit quaerat veritatis velit autem id sunt!.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
