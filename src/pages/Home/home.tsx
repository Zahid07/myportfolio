import React from 'react'
import './home.scss';
import { Navbar } from '../../components';

const Home = () => {
  
  return (
    <div className='home-container'>
        <div className='home-container__About'>
            Home
        </div>
        <div className='home-container__Contact'>
            <Navbar ></Navbar>
          </div>
    </div>
  )
}

export default Home