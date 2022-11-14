import React from 'react'
import { PriceType } from '../../state/State';
import { PricingCard } from '../pricingCard/PricingCard';
import './Pricing.scss';

type SectionPropsType = {
  pricing: PriceType[]
}

export const Pricing = (props: SectionPropsType) => {


  const _monthlyRate = props.pricing.filter(value => value.rateType === 'Monthly Rate')
  
  const hourlyRate = props.pricing.filter(value => value.rateType === 'Hourly Rate')
  const cashBasis = _monthlyRate.filter(value => value.category === 'Cash Basis')
  const accrualBasis = _monthlyRate.filter(value => value.category === 'Accrual Basis')

  const pricing = (v: PriceType[]) => v.map(value => {
    return(
      <>
        <PricingCard pricing={value}/>
      </>
    )
  })


    return (
      <div className="pricing-outer">
        <div>
          <p>Monthly Rate</p>
        
        
        
        </div>
        
        <div className="pricing-outer-container">
          {pricing(cashBasis)}
        </div>
        <div className="pricing-outer-container">
          {pricing(accrualBasis)}
        </div>
        
        <div>
          Hourly Rate
        </div>
        <div className="pricing-outer-container">
          {pricing(hourlyRate)}
        </div>
      </div>
    )
}