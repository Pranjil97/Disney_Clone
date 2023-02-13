import React from 'react'
import ctalogoone from '../assets/images/cta-logo-one.svg'
import catlogotwo from '../assets/images/cta-logo-two.png'

const LandingPage = (props) => {
  let {tab,settab} = props;
  return (
    <div className='landingPage'>
      <img className='cta1' src={ctalogoone} alt="logo"></img>
      <button className='getBtn'  onClick={()=>settab((tab)=>!tab)}>GET ALL THERE</button>
      <p className='p1'>Get Premier Access to Raya and the Last Dragon for an additional fee  with a Disney+ subscription.
        As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
      </p>
      <img className='cta2' src={catlogotwo} alt='cat2'></img>
    </div>
  )
}

export default LandingPage
