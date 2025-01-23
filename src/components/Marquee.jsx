import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div className='w-full flex flex-col gap-10 '>
        <div className='w-full flex gap-20 '>
        {imagesurl.map((item, index) =>(
            
            <img key={index} src={item} alt="" />
        ))}
        </div>
        <div className='w-full flex gap-16 '>
        {imagesurl.map((item, index) =>(
            
            <img key={index} src={item} alt="" />
        ))}
        </div>
    </div>
  )
}

export default Marquee
