import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='About w-full min-h-[100vh] bg-[#CDEA68] rounded-2xl rounded-tr-2xl pb-[4vw]'>
        <div className='uppart h-[50vh] pl-[3vw] pr-[7vw] flex items-center' >
            <p className='text-[#212121] text-[3.6vw] leading-[4vw] tracking-tighter font-["Neue Mentral"]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, 
                sell products, explain complex ideas, and hire great people.</p>
        </div>
        <div className=" w-full bg-[#212121] h-[1px]"></div>
        <div className='downpart flex items-start px-[3vw] '>
            <div className='left  w-1/2 flex flex-col justify-center   '>
                <h1 className='text-[3.6vw] font-[400] text-[#212121] tracking-tighter'>Our approach:</h1>
            <div className='w-fit'>
             <button className='text-[1.1vw] uppercase text-white bg-[#212121] px-[2vw] py-[1.2vw] rounded-full flex  items-center gap-6'> Read More 
             <div className='h-2 w-2 bg-white rounded-full'></div>
             </button>
            </div>
            </div>  
            <div className='right bg-cyan-400 w-1/2 h-[60vh] rounded-2xl overflow-hidden mt-[1.5vw] '>
                  <img className='h-[100%] w-[100%] object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default About