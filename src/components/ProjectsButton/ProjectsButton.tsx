import React from 'react'
import {ProjectsSvg} from '../../components';
import './ProjectsButton.scss';

const ProjectsButton = () => {
  return (

    // <div className='project_button_outer_container'>

    
        <div className='project_button_container'>
          <div className='profile_button_container--Picture' >
            <ProjectsSvg/>
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
      // </div>
  )
}

export default ProjectsButton