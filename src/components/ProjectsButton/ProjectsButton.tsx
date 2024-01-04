import React from 'react'
import './ProjectsButton.scss';
import small_gear from  "../../assets/small-gear.svg"
import project_laptop from "../../assets/project-laptop.svg"

const ProjectsButton = () => {
  return (
    <div className='project_button_container'>
      <div className='project_button_container--Picture' >
        <img src={project_laptop}  alt='ERROR'/>
      </div>

      <div className='project_bottom_container'>
        <div className='project_bottom_container--Text'>
          Projects
        </div>
        <div className='project_button_container--Projects'>
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className='circle'></div>
        ))}
        </div>

      </div>
      
      </div>
  )
}

export default ProjectsButton