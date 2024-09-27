import React from 'react'
import { useState, useEffect } from 'react'


const Projects = () => {

  
  const [projects,setProjects] = useState([]);
  

  useEffect(() => {
    const fetchProjects= async () => {
      try {
        const res= await fetch('https://api.github.com/users/Eya-ben-aziza/repos', {
          headers: {
            Authorization: `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`
          }
        });
        console.log(res);
        const data= await res.json();
        console.log(data);
        setProjects(data);
        console.log(projects);
      }
      catch (error) {
        console.log("error fetching data", error);
      }
      

    };

    fetchProjects();
    }
  ,[])


  return (
    <div>
      <h2 style={{ color: 'white', margin: '60px', fontSize: '50px' }}>Projects</h2>
        <div id="Projects" style={{color: 'white'}} className="projectContainer">
            {
              projects.map( (project) => {
                console.log(project);
                return (
                  <div className="project">
                  <img src="src/assets/proj1Pic.jpg" alt="proj1 picture" className="projectImage"></img>
                  <h2>{project.name}</h2>
                  <br></br>
                  <p>{project.id}</p>
                </div>
                )

              }

              )
            }
          
            
        </div>
    </div>
  )
}

export default Projects
