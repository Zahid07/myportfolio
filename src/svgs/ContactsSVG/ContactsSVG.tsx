import React from 'react'
import './ContactsSVG.scss';
import {fence_unselected, plane_unselected, fence_selected, plane_selected} from '../../assets'


const ContactsSVG = () => {
  return (
    <div className='ContactSvg_container'>  

      <div className='fence_SVG'>
        <img src={fence_unselected} alt='fenceUnselected' />
        <img src={fence_selected} alt='fenceSelected' />
      </div>

      <div className='plane_SVG'>
        <img src={plane_unselected} alt='planeUnselected' />
        <img src={plane_selected} alt='planeSelected' />
      </div>

       
    </div>
  )
}

export default ContactsSVG