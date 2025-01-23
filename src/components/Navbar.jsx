import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-xl bg-zinc-900 mx-auto p-3 flex iiems-center justify-between border-b-[1px]'>
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className='links flex items-center gap-14 ml-20'>
        {["Home", "Works", "Culture", ].map((elem,index)=> <a key={index} className='text-sm text-zinc-300 font-[500] font-sans	font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' href='#'>
        {index===1 && (<span className='w-2 h-2 inline-block bg-green-500 rounded-full mr-1'></span>)}
            {elem}
            </a>)}
      </div>
      <Button />
    </div>
  )
}

export default Navbar
