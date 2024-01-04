import React from 'react'
import './ProfileSVG.scss';
import {floor} from '../../assets'

const ProfileSVG = () => {
  return (
    <div className='ProfileSvg_container'>

      <div className='floor_SVG'>
        <img src={floor} alt='Floor' />
      </div>

       
    </div>
  )
}

export default ProfileSVG