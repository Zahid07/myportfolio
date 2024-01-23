import React from 'react'
import './home.scss';
import {ProfilePic, ProjectsButton, ProfileButton, ContactButton} from '../../components';

const Home = () => {
  
  return (
    <div className='outside-Container'>
    <div className='home-container'>
      <ProfilePic></ProfilePic>
      <div className='home-container__buttons'>
        <ContactButton></ContactButton>
        <ProfileButton></ProfileButton>
        <ProjectsButton></ProjectsButton>
      </div>
      
    </div>
    </div>
  )
}

export default Home