import React from 'react'
import Button from './Button';

function Card({width, start, para}) {
  return (
    <div className={`${width} hover:bg-purple-500 min-h-72 flex flex-col  justify-between bg-zinc-800 p-5 rounded-xl`}>
        <div>
      <div className='w-full'>
        <h3 className='text-zinc-100'>one heading</h3>
      </div>
      <h1 className='text-3xl text-zinc-100 font-medium mt-5'>whatever heading</h1>
      </div>
      <div className='w-full mt-60'>
        {
            start===true &&(
                <>
                <h1 className='text-6xl font-semibold mb-4 tracking-tight leading-none text-zinc-100'>start a project</h1>
                 <Button />
                 </>
            )
        }
        {
            para===true &&(
                <>
                 <p className='text-sm  text-zinc-100 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </>
            )
        }
      </div>
    </div>
  )
}

export default Card
