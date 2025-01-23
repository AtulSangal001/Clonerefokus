import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const images =[
        "https://assets-global.website-files.com/6334198f23…47d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
        "https://assets-global.website-files.com/6334198f23…7d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
        "https://assets-global.website-files.com/6334198f23…47d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
        "https://assets-global.website-files.com/6334198f23…7d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",      
    ]
    


  return (
    <div className='w-full mt-32'>
      <Marquee imagesurl={images} />
    </div>
  )
}

export default Marquees
