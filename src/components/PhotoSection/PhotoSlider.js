import React from 'react'
import '../../styles/PhotoSectionStyles.css'
import PhotoSliderLogic from './PhotoSliderLogic'
import Pic1 from '../../photos/Photo1.jpeg'
import Pic2 from '../../photos/Photo2.jpeg'
import Pic3 from '../../photos/Photo3.jpeg'
import Pic4 from '../../photos/Photo4.jpeg'
import Pic5 from '../../photos/Photo5.jpeg'
import Pic6 from '../../photos/Photo6.jpeg'
import Pic7 from '../../photos/Photo7.jpeg'


export default function PhotoSlider() {
    const pics = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7]

  return (
    
    <div className='mainPhotoSectionDiv' id="photos">
        <div className='titleDiv'><h1 className='photoTitle'>Check Out Some of Our Work!</h1></div>
        <div><PhotoSliderLogic images={pics}></PhotoSliderLogic></div></div>
  )
}
