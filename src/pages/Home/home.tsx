import React from 'react'
import './home.scss';
import {ProfilePic, ProjectsButton, ProfileButton} from '../../components';

const Home = () => {
  
  return (
    <div className='home-container'>
      <ProfilePic></ProfilePic>
      <div className='home-container__buttons'>
        <ProjectsButton></ProjectsButton>
        <ProfileButton></ProfileButton>
        <ProjectsButton></ProjectsButton>
      </div>
      
    </div>
  )
}

export default Home