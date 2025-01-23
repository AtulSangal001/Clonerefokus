import React from 'react'
import Card from './Card'


function Cards() {
  return (
    <div className='w-full'>
    <div className='max-w-screen-xl flex gap-3 py-20 mx-auto'>
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false}  />
    </div>
  </div>
  )
}

export default Cards
