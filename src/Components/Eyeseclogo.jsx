import { transform } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Eyeseclogo() {

 const  [rotated ,setrotate] = useState(0) 
  useEffect(() =>
  {
    window.addEventListener("mousemove" ,(e) =>
    {
        let mousex = e.clientX;
        let mousey = e.clientY;
        let deltay =  mousey -  window.innerHeight/2
        let deltax =  mousex -  window.innerWidth/2
        var angle =  Math.atan2(deltay,deltax) * (180/Math.PI)
        setrotate(angle - 180)
    })
  })
 
  return (
    <div data-scroll data-scroll-speed ="-.1" className='min-h-[100vh] relative w-full bg-[#cdea68] rounded-2xl'>
        <div className="text flex flex-col uppercase leading-[13vw]  justify-center text-center pt-[3vw]">
            {["Ready","To start","The Project ?"].map((elem,index) =>(<h1 key={index} className='text-[13vw] tracking-tighter text-black font-[700]'>{elem}</h1> ))}
        </div>
        <div className='btn h-[40vh] w-full flex flex-col items-center pt-[2vw]'>
          <button className='h-[4vw] w-[18vw] bg-[#212121] rounded-full flex justify-center items-center  gap-10 uppercase  '>Start the Project <div className='h-2 w-2 bg-white rounded-full'></div></button>
          <div className='text-black font-medium'>or</div>
          <button className='h-[4vw] w-[18vw] border-[1px] border-[#212121] text-black font-[500] tracking-tighter rounded-full flex justify-center items-center  gap-10 uppercase  '>Hello@ochi.com <div className='h-2 w-2 bg-black rounded-full'></div></button>

        </div>
        <div className=" absolute  flex  gap-10  top-1/4 left-1/2 -translate-x-[50%]">
            <div className="eye flex  justify-center  relative items-center h-[15vw] w-[15vw]  rounded-full bg-zinc-100 overflow-hidden">
             <div className="eyeblackpart relative flex  w-[10vw] h-[10vw] rounded-full bg-black">
               <div  style={{transform: `translate(-50%,-50%) rotate(${rotated}deg)`}} className=" line w-full absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                          <div className="eyewhitepart w-7 h-7  rounded-full bg-zinc-100"></div>
                        </div>
                     </div>
            </div>
            <div className="eye flex  justify-center items-center  h-[15vw] w-[15vw]  rounded-full bg-zinc-100">
                 <div className="eyeblackpart relative   w-2/3 h-2/3 rounded-full bg-black">
                 <div style={{transform: `translate(-50%,-50%) rotate(${rotated}deg)`}}  className="line w-full absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                      <div className="eyewhitepart w-7 h-7  rounded-full bg-zinc-100"></div>
                  </div>                
                </div>
            </div>
         </div>
    </div>
  )
}

export default Eyeseclogo