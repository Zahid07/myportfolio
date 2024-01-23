import React from 'react'
import {ContactsSVG} from '../../svgs';
import './ContactButton.scss';

const ContactButton = () => {
  return (    
        <div className='contact_button_container'>
          <div className='contact_button_container--Picture' >
            <ContactsSVG/>
          </div>

          <div className='contact_bottom_container'>
            <div className='contact_bottom_container--Text'>
              Contact
            </div>
            <div className='contact_button_container--Projects'>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className='contact_circle'></div>
            ))}
            </div>

          </div>
          
          </div>
  )
}

export default ContactButton