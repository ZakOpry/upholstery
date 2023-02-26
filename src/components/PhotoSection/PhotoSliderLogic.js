import React, { useState } from 'react'
import '../../styles//PhotoSectionStyles.css'
import {TfiAngleLeft} from 'react-icons/tfi'
import {TfiAngleRight} from 'react-icons/tfi'
import { IconContext } from "react-icons";


export default function PhotoSliderLogic(props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? props.images.length - 1 : currentImageIndex - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === props.images.length - 1 ? 0 : currentImageIndex + 1);
  };


  return (
    <IconContext.Provider
    value={{ className: 'react-icon'}}
  >
    <div className="photo-slider">
<TfiAngleLeft onClick={previousImage}/>
        <div className='photo-container'>
    <img src={props.images[currentImageIndex]} alt="upholster" className="image" /></div>
    <TfiAngleRight onClick={nextImage}/>
  </div>
  </IconContext.Provider>
  )
}
