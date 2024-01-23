import React from 'react'
import './ProfileSVG.scss';
import {unselected_floor, selected_floor, screen_unselected, screen_selected, envelope, mobile_screen_unselected, shadows, mobile_screen_selected, key_unselected, key_selected, plants_unselected, plants_selected} from '../../assets'

const ProfileSVG = () => {
  return (
    <div className='ProfileSvg_container'>

      <div className='shadows_SVG'>
        <img src={shadows} alt='shadows' />
      </div>

      <div className='screen_SVG'>
        <img src={screen_unselected} alt='unSelectedScreen' />
        <img src={screen_selected} alt='selectedScreen' />
      </div>

      <div className='envelope_SVG'>
        <img src={envelope} alt='envelop'/>
      </div>

      <div className='mobile_screen_SVG'>
        <img src={mobile_screen_unselected} alt='unSelectedMobileScreen' />
        <img src={mobile_screen_selected} alt='selectedMobileScreen' />
      </div>

      <div className='floor_SVG'>
        <img src={unselected_floor} alt='selectedFloor' />
        <img src={selected_floor} alt='unSelectedFloor' />
      </div>

      <div className='key_SVG'>
        <img src={key_unselected} alt='unSelectedKey' />
        <img src={key_selected} alt='selectedKey' />
      </div>
    
      <div className='plants_SVG'>
        <img src={plants_unselected} alt='unSelectedPlants' />
        <img src={plants_selected} alt='selectedPlants' />
      </div>
      

       
    </div>
  )
}

export default ProfileSVG