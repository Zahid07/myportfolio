import React from 'react'
import './home.scss';
import {ProjectsButton} from '../../components';
import WarpLines from '../../threeJSTest/warp_lines';

const Home = () => {
  // WarpLines();
  
  return (
    <div className='home-container'>
        <div className='home-container__About'>
        <div style={{margin:'20px'}}></div>
          <ProjectsButton></ProjectsButton>
          <div style={{margin:'10px'}}></div>
          <ProjectsButton></ProjectsButton>
          <div style={{margin:'10px'}}></div>
          <ProjectsButton></ProjectsButton>
          <div style={{margin:'20px'}}></div>
            
        </div>
    </div>
  )
}

export default Home