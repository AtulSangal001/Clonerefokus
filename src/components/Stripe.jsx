import React from 'react'

function Stripe({data}) {
  return (
    <div className='w-[16.667%] px-4 py-5 flex items-center justify-between border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-500'>
        <img src={data.url} alt="" />
        <span className='text-zinc-100'>{data.number}</span>
    </div>
  )
}

export default Stripe
