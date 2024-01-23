import React, { useEffect, useState, useMemo } from 'react'
import './ProfilePic.scss'
import {profile_pic} from '../../assets'

const ProfilePic = () => {

    

  const professions = useMemo(() => [
    'Front-End Developer',
    'Back-End Developer',
    'Full-Stack Developer'
  ], []);

    const [currentProfession, setCurrentProfession] = useState(0);
    const [stopRotation, setStopRotation] = useState(false);

    useEffect(() => {
      if (!stopRotation) {
        const interval = setInterval(() => {
          setCurrentProfession((prevProfession) =>
            prevProfession === professions.length - 1 ? 0 : prevProfession + 1
          );
    
          if (currentProfession === 2) {
            setStopRotation(true);
          }
        }, 3000);
    
        return () => clearInterval(interval);
      }
    }, [stopRotation, currentProfession, professions]);


  return (
    <div className='profile-container'>

      <div className='image-container'>
        <img src={profile_pic} alt='profilePic' />
          
      </div>

      <div className='intro-container'>
        <h1>Hi, I am</h1>
      </div>

      <div className='name-container'>
        <h1>Muhammad Zahid</h1>
      </div>

      {
        stopRotation ? 
        <div className='profession-container-no-rotate'>
          <h1>Full-Stack Developer</h1>
        </div>
        : null
      }

      {
        !stopRotation ?
        <div className='profession-container'>
          <h1><span>{professions[currentProfession]}</span></h1>
        </div>:
      null
        
      }

      

    </div>
  )
}

export default ProfilePic