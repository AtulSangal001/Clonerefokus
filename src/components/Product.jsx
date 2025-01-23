import React from 'react'
import Button from './Button'

function Product({dets}) {
  return (
    <div className='w-full py-20 '>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-medium text-white'>{dets.title}</h1>
        <div className='w-1/3'>
            <p className='mb-10 text-zinc-100'>{dets.description}</p>
            <Button  />
        </div>
      </div>
    </div>
  )
}

export default Product 
