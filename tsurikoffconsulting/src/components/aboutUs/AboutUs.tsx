import React from 'react'
import './AboutUs.scss';

type SectionPropsType = {
  photo: string
  about: string
}




export const AboutUs = (props: SectionPropsType) => {
  
    return (
      <div className="outer-container">
        <div className='photo'>
          PHOTO
        </div>
        <div className='about'>
          ABOUT
        </div>
      </div>
    )
}