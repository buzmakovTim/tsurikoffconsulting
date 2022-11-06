import React from 'react'
import { PriceType } from '../../state/State';
import './PricingCard.scss';

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
          {props.pricing.prepaid}
        </div>
      )
    }
    const button = () => {
      return(
        <div className='bookCall'>
          <button>Book Call</button>
        </div>
      )
    }

    return (
      <div className="card-container">
        
        {props.pricing.title ? title() : ''}
        {props.pricing.rate ? rate() : ''}
        {props.pricing.prepaid ? prepaid() : ''}
        {props.pricing.sectionOne ? props.pricing.sectionOne : ''}
        {props.pricing.sectionTwo ? props.pricing.sectionTwo : ''}
        {button()}
      </div>
    )
}