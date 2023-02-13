import React from 'react'

//sildeone
import scale3 from '../assets/images/scale3.jpg'
import bad11 from '../assets/images/scale11.jpg'
import bad12 from '../assets/images/scale12.jpg'
import bad from '../assets/images/scale.jpg'
//sildetwo
import bad9 from '../assets/images/scale9.jpg'
import bad15 from '../assets/images/scale15.jpg'
import bad3 from '../assets/images/badging3.jpg'
import bad13 from '../assets/images/scale13.jpg'
//sildethree
import bad1 from '../assets/images/badging.jpg'
import bad2 from '../assets/images/badging2.jpg'
import bad6 from '../assets/images/badging6.jpg'
import bad7 from '../assets/images/badging7.jpg'
import CategoryData from './CategoryData'
//slidefour
import scale5 from '../assets/images/scale5.jpg'
import scale18 from '../assets/images/scale18.jpg'
import scale4 from '../assets/images/scale4.jpg'
import scale14 from '../assets/images/scale14.jpg'


const DisplayContent = () => {

    let sildeone = [bad11, scale3, bad12, bad]
    let sildetwo = [bad9, bad15, , bad3, bad13]
    let slidethree = [bad2, bad1, bad7, bad6]
    let slidefour = [scale5, scale18, scale4, scale14]

    return (
        <div className=''>
            <CategoryData data={sildeone} heading='Recommended For You' />
            <CategoryData data={sildetwo} heading='New to Disney+' />
            <CategoryData data={slidethree} heading='Originals' />
            <CategoryData data={slidefour} heading='Trending' />
            <br></br>
            <br></br>
        </div>
    )
}

export default DisplayContent;