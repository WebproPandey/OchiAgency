import React, { useEffect, useState } from 'react'
import { BsTranslate } from 'react-icons/bs'

function Ochilogo() {
    
 let[rotate,setRotate] =  useState(0)
  useEffect (() =>
  {
    window.addEventListener("mousemove" ,(e) =>
    {
        let mouseX = e.clientX 
        let mouseY = e.clientY 
        let deltaY =  mouseY -  window.innerHeight/2
        let deltaX =  mouseX -  window.innerWidth/2
        var angle =  Math.atan2(deltaY,deltaX) * (180/Math.PI)
        setRotate(angle-180)
    })
  })

  return (
    <div className='Eyes h-[100vh] w-full flex justify-center items-end overflow-hidden '>
        <div data-scroll data-scroll-speed="-.7" className='relative  mt-[10vw] w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
         <div className=" absolute  flex  gap-10  top-1/4 left-1/2 -translate-x-[50%]">
            <div className="eye flex  justify-center  relative items-center h-[15vw] w-[15vw]  rounded-full bg-zinc-100 overflow-hidden">
             <div className="eyeblackpart relative flex  w-[10vw] h-[10vw] rounded-full bg-black">
               <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line w-full absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                          <div className="eyewhitepart w-7 h-7  rounded-full bg-zinc-100"></div>
                        </div>
                     </div>
            </div>
            <div className="eye flex  justify-center items-center  h-[15vw] w-[15vw]  rounded-full bg-zinc-100">
                 <div className="eyeblackpart relative   w-2/3 h-2/3 rounded-full bg-black">
                 <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                      <div className="eyewhitepart w-7 h-7  rounded-full bg-zinc-100"></div>
                  </div>                
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Ochilogo