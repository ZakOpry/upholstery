import React from 'react'
import "../../styles/ContactStyles.css"
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

export const Contact = () => {
  return (
    <div className='mainContactDiv' id="contact"> <div className='titleDiv'><h1 className='contactTitle'>Contact Us!</h1></div>
    
    <p>Email or call us today with details of your project and we will get back to you with a quote </p>
    <div className='contactLinksContainer'>
    <div className='emailLinkDiv'><MdEmail></MdEmail> <a href='mailto:@mcsuphosltery.com.com'>Click Here to Email</a></div>
    <div className='phoneLinkDiv'><BsFillTelephoneFill></BsFillTelephoneFill><a className='number' href='tel:337-789-3503'>337-789-3503</a></div></div>
    </div>
  )
}


