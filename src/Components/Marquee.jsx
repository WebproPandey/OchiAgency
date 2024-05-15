import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.05"  className='w-full py-[2vw]  bg-[#004D43] rounded-tr-2xl rounded-tl-2xl pt-[7vw] pb-[3vw]' >
        <div className='texts border-t-[1px] border-b-[1px] border-zinc-300 overflow-hidden  flex whitespace-nowrap  '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear" , duration:12}} className='text-[15vw] pr-[3vw] leading-none  tracking-tighter font-sans font-semibold uppercase  pb-[1vw] '  >we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear" , duration:12}} className='text-[15vw] pr-[3vw] leading-none  tracking-tighter font-sans font-semibold uppercase   pb-[1vw] '  >we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear" , duration:12}} className='text-[15vw] pr-[3vw] leading-none  tracking-tighter font-sans font-semibold uppercase   pb-[1vw] '  >we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee