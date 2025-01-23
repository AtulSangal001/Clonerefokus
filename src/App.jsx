import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from "./components/Products";
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import LocomotiveScroll from 'locomotive-scroll';

function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-zinc-900'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  )
}

export default App
