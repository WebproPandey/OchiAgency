import React from 'react'

function Card() {
  return (
    <div className='h-screen w-full bg-white flex gap-5 px-[4vw] pt-[5vw]'>
        <div className="left h-[55vh] w-1/2">
            <div className="card h-full w-full relative bg-[#004D43] rounded-2xl px-[2vw] ">
                <img className='h-[5vw] w-[12vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                 <button className='absolute bottom-[2vw] border-[1px]  text-[1vw] px-[.6vw] py-[.2vw] rounded-full border-[#CDEA68] text-[#CDEA68] '>&copy; 2022 -2024</button>
            </div>
        </div>
        <div className="right h-[55vh] w-1/2">
            <div className="cards h-full w-full flex gap-5 items-center">
                <div className="card h-full w-1/2 relative bg-[#212121] rounded-2xl pl-[1.5vw]">
                  <img className='h-[6.5vw] w-[12vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                  <button className='absolute bottom-[2vw] border-[1px]  text-[1.1vw] px-[.6vw] py-[.2vw] rounded-full uppercase font-[500] text-zinc-200 '>Rating 5.0 on clutch</button>
                </div>
                <div className="card h-full w-1/2 bg-[#212121] rounded-2xl  pl-[1.5vw] relative" >
                <img className='h-[8vw] w-[8vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                  <button className='absolute bottom-[2vw] border-[1px]  text-[1.1vw] px-[.6vw] py-[.2vw] rounded-full uppercase font-[500] text-zinc-200 '>Business bootcamp alumni</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card