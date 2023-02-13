import React from 'react'
import bad4 from '../assets/images/badging4.jpg'
import bad5 from '../assets/images/badging5.jpg'
import scale6 from '../assets/images/scale6.jpg'

const HomeScrollImg = () => {
  return (
    <div>
      <div className='homescrollimg'>
        <img className='imgscr1' src={bad4} alt='bad4' />
        <img className='imgscr1' src={bad5} alt='bad5' />
        <img className='imgscr1' src={scale6} alt='scale6' />
      </div>
    </div>
  )
}

export default HomeScrollImg;
