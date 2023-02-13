import React from 'react'

const CategoryData = (props) => {
    let { data, heading } = props;
    return (
        <div className='text-white'>
            <div>
                <h3 className='text-white content-start flex ml-[80px] w-fit mt-[50px] font-semibold mb-[25px]'>{heading}</h3>
                <div className='flex ml-[50px]' >
                    {data.map((items, key) => {
                        return <img key={key} className='h-[200px] w-[410px] rounded-lg ml-[30px] bg-[#090b13] border-[2px]  border-gray-700' src={items} alt='images' />
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryData
