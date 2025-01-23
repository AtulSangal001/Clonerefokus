import React from 'react'
import { useMotionValueEvent, useScroll } from "motion/react"

function Work() {

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })



    const images = [
        {url : "../public/pictures/pic1.png", top:"50%", left:"50%", isActive:true},
        {url : "../public/pictures/pic2.png", top:"56%", left:"44%", isActive:false},
        {url : "../public/pictures/pic3.png", top:"45%", left:"56%", isActive:false},
        {url : "../public/pictures/pic4.png", top:"60%", left:"53%", isActive:true},
        {url : "../public/pictures/pic5.png", top:"43%", left:"40%", isActive:false},
        {url : "../public/pictures/pic6.png", top:"65%", left:"55%", isActive:false},
    ]

  return (
    <div className='w-full'>
        <div className='max-w-screen-xl relative text-center mx-auto '>
        <h1 className='text-[32vw] leading-none select-none tracking-tighter text-zinc-100 font-[400]'>work</h1>
        <div className='w-full h-full absolute top-0'>
            {images.map((elem,index)=>(elem.isActive && (<img key={index} className='w-40 h-40 absolute object-cover rounded-md -translate-x-[50%] -translate-y-[50%]'  src={elem.url} style={{top: elem.top, left: elem.left}} alt="" />)))}
        </div>
        </div>
      
    </div>
  )
}

export default Work
