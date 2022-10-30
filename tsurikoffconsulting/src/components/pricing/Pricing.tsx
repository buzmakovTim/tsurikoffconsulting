import React from 'react'
import { PriceType } from '../../state/State';
import './Pricing.scss';

type SectionPropsType = {
  pricing: PriceType[]
}

export const Pricing = (props: SectionPropsType) => {


  const pricing = props.pricing.map((value => {
    return(
      <>
        <p>{value.rate}</p>
      </>
    )
  })
  )


    return (
      <div className="outer-container">
        {pricing}
      </div>
    )
}