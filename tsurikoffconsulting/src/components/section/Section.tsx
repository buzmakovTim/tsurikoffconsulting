import React from 'react'
import { PriceType, SectionType } from '../../state/State'
import { AboutUs } from '../aboutUs/AboutUs';
import { Pricing } from '../pricing/Pricing';
import './Section.scss';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import { Fade } from 'react-awesome-reveal';

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
            <Fade direction='down'>
              <div className="section-services">
                <WhereToVoteOutlinedIcon htmlColor="rgb(119, 119, 118)"/>
                <p>{value as string}</p>
              </div>
            </Fade>
          )
        })
      )}

      if(props.section.title === 'Pricing'){
        content = <Pricing pricing={props.section.content as PriceType[]}/>
      }

      if(props.section.title === 'Contact Us'){
        content = <>
          <div className="contact-us">
            <p>Contact Us</p>
          </div>
        </>
      }
      
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