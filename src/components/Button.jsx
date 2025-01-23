import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { PiArrowBendDownRight } from "react-icons/pi";

function Button({title = "Get Started"}) {
  return (
    <div className='w-32 py-2 px-2 flex items-center justify-between bg-zinc-100 rounded-full'>
      <span className='text-black text-sm font-sans font-[500]'>{title}</span>
      <span className=''><PiArrowBendDownRight /></span>
    </div>
  )
}

export default Button
