import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Ochilogo from './Components/Ochilogo'
import Featured from './Components/Featured'
import Card from './Components/Card'
import Eyeseclogo from './Components/Eyeseclogo'
import Fotter from './Components/Fotter'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  
  return (
    <div className="w-full min-h-screen  text-white bg-zinc-800" >
       <Navbar/>
       <LandingPage/>
       <Marquee/>
       <About/>
       <Ochilogo/>
       <Featured/>
       <Card/>
       <Eyeseclogo/>
       <Fotter/>
    </div>
  )
}

export default App