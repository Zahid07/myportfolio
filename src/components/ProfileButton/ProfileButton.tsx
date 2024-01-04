import React from 'react'
import {ProfileSVG} from '..';
import './ProfileButton.scss';

const ProfileButton = () => {
  return (    
        <div className='profile_button_container'>
          <div className='project_button_container--Picture' >
            <ProfileSVG/>
          </div>

          <div className='project_bottom_container'>
            <div className='project_bottom_container--Text'>
              Profile
            </div>
            <div className='project_button_container--Projects'>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className='profile_circle'></div>
            ))}
            </div>

          </div>
          
          </div>
  )
}

export default ProfileButton