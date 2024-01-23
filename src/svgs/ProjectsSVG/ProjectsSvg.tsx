import React from 'react'
import './ProjectsSvg.scss';
import {project_laptop, speech_bubble, gear_1, gear_2, gear_3, gear_4, laptop_hovered} from '../../assets'

const ProjectsSvg = () => {
  return (
    <div className='ProjectsSvg_container'>

        <div className='all_gears'>
            <img src={gear_1} alt='gear_1' className='gear_1' />
            <img src={gear_2} alt='gear_2'  className='gear_2'/>
            <img src={gear_3} alt='gear_3' className='gear_3'/>
            <img src={gear_4} alt='gear_4' className='gear_4'/>
        </div>
        
        <div className='project_laptop'>
        <img src={project_laptop} alt='project_laptop' />
        </div>

        <div className='laptop_hovered'>
        <img src={laptop_hovered} alt='laptop_hovered' />
        </div>

        <div className='speech_bubble'>
        <img src={speech_bubble} alt='speech_bubble' />
        </div>
        
    </div>
  )
}

export default ProjectsSvg