import React from 'react'
import starwars from '../assets/images/scale2.jpg'
import marvel from '../assets/images/scale7.jpg'
import national from '../assets/images/scale8.jpg'
import pixer from '../assets/images/scale10.jpg'
import disney from '../assets/images/scale17.jpg'

const CategoryIcons = () => {
  let catIconsImg = [disney, pixer, marvel, starwars, national]
  return (
    <div className='flex justify-center mt-[100px]'>
      {catIconsImg.map((items,key) => {
        return <img key={key} className='rounded-xl bg-[#090b13] h-[160px] ml-[60px] border-[2px] border-gray-700' src={items} alt="img"></img>
      })}
    </div>
  )
}

export default CategoryIcons
