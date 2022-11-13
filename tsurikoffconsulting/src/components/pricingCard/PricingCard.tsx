import React from 'react'
import { PriceType } from '../../state/State';
import { Button } from '../button/button';
import './PricingCard.scss';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

type PricingCardType = {
  pricing: PriceType
}

export const PricingCard = (props: PricingCardType) => {

    const title = () => {
      return(
        <div className='pricing-title'>
          <h3>{props.pricing.title}</h3>
        </div>
      )
    }
    const rate = () => {
      return(
        <div className='rate'>
          {props.pricing.rate}
        </div>
      )
    }
    const prepaid = () => {
      return(
        <div className='prepaid'>
          <LocalOfferOutlinedIcon fontSize="small" htmlColor="rgb(119, 119, 118)"/>
          <p>
            {props.pricing.prepaid}
          </p>
        </div>
      )
    }

    const sectionList = (v: string[]) => v.map(value => {
      return(
        <div className="section-list-container">
          <CheckBoxOutlinedIcon fontSize="small" htmlColor="rgb(119, 119, 118)"/>
          <p>
          {value}
        </p>
        </div>
        
      )
    })

    const sectionOne = () => {
      if(props.pricing.sectionOne){
        return(
          <div className='sectionOne'>
            {sectionList(props.pricing.sectionOne)}
          </div>
        )
      } else return
    }


    const sectionTwo = () => {
      if(props.pricing.sectionTwo){
        return(
          <div className='sectionTwo'>
            {sectionList(props.pricing.sectionTwo)}
          </div>
        )
      } else return
    }


    const button = () => {
      return(
        <div className='bookCall'>
          <Button name="Free Consultation" smallSize={true}/>
        </div>
      )
    }

    return (
      <div className="card-container">
        
        {props.pricing.title ? title() : ''}
        {props.pricing.rate ? rate() : ''}
        {props.pricing.prepaid ? prepaid() : ''}
        {props.pricing.sectionOne ? sectionOne() : ''}
        {props.pricing.sectionTwo ? sectionTwo() : ''}
        {/* {props.pricing.sectionOne ? props.pricing.sectionOne : ''} */}
        {/* {props.pricing.sectionTwo ? props.pricing.sectionTwo : ''} */}
        {button()}
      </div>
    )
}