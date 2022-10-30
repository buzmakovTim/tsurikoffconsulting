import React, { useCallback } from 'react'
import { SectionType } from '../../state/State'
import { AboutUs } from '../aboutUs/AboutUs';
import './Section.scss';

type SectionPropsType = {
  section: SectionType
  index: number
}




export const Section = (props: SectionPropsType) => {

    const extraClass = props.index % 2 === 0 ? 'primary' : 'secondary';

    
    function renderContent() {
      let content;

      if(props.section.title === 'About Us'){
        content = <AboutUs photo='image' about='About'/>
      }

      if(props.section.title === 'Services' || props.section.title === 'Key Technologies'){
        content = props.section.content.map((value => {
          return(
            <>
              <h4>{value as string}</h4>
            </>
          )
        })
      )}
      
      return content
    }



    return (
      <div className={`main-container ${extraClass}`} id={props.section.id}>
        <div className='title'>
          <h1>{props.section.title}</h1>
        </div>
        <div className='content'>
         {renderContent()}
        </div>
      </div>
          
    )
}