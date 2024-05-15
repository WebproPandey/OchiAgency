import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='h-screen w-full bg-zinc-800 pt-1'>
        <div className='textstructure mt-[12vw] px-[5vw] '>
            {["We create","Eye Opening","presentations"].map((item, index) =>{
              return (
                  <div key={index}  className='masker overflow-hidden'>
                    <div className='w-fit  flex items-end '> 
                     {index === 1 && (  
                      <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1] , duration:1}}   className='w-[10vw] h-[6.5vw] overflow-hidden rounded-md'>
                        <img className='h-full w-full object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                      </motion.div>
                     )} 
                     <h1 key={index}  className=" text-[7.7vw] leading-[7.4vw] tracking-tighter uppercase font-['Founders Grotesk'] font-[500]"  >{item}</h1>
                    </div>
                  </div>
                )
            })}
           
        </div>
        <div className='border-t-[1px] bg-zinc-800 mt-[6vw] flex justify-between items-center py-[2vw] px-[5vw]' >
            {["for  public and private companies" ,"from the first pitch to IPO"]
            .map((item ,index) => <p key={index} className=' text-md font-light tracking-tight leading-none'>{item}</p> )}
            <div className='start flex gap-2 items-center justify-center'>
            <div className="px-[2vw] py-[.2vw] text-[1.1vw] uppercase border-[1px] border-zinc-500 font-light rounded-full" >start the project</div>
            <div className='linkarrow h-[2.2vw] w-[2.2vw] rounded-full border-[1px]  border-zinc-500 font-light flex justify-center items-center' >
              <GoArrowUpRight />
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage