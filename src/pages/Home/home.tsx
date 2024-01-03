import React from 'react'
import './home.scss';
import {ProfilePic, ProjectsButton} from '../../components';

const Home = () => {
  
  return (
    <div className='home-container'>
      <ProfilePic></ProfilePic>
      <div className='home-container__buttons'>
        <ProjectsButton></ProjectsButton>
        <div style={{marginRight:'60px'}} ></div>
        <ProjectsButton></ProjectsButton>
        <div style={{marginRight:'60px'}} ></div>
        <ProjectsButton></ProjectsButton>
      </div>
      
    </div>
  )
}

export default Home