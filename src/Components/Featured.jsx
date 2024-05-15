import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  let handlehover = (elem) => {
    cards[elem].start({ y: "0" });
  };
  let handlehoverEnd = (elem) => {
    cards[elem].start({ y: "100%" });

  };
 
  

  return (
    <div className=" w-full pt-[5vw] ">
      <h1 className='font-["Neue Mentral"] text-[4vw] font-light pl-[4vw] pb-[3vw]'>
        Featured projects
      </h1>
      <div className="h-[1px] w-full bg-zinc-100"></div>
      <div className="px-10">
        <div className="cards w-full  mt-[8vw] flex gap-8 relative ">
          <motion.div
            onHoverStart={() => handlehover(0)}
            onHoverEnd={() => handlehoverEnd(0)}
            className="cardcontainer w-1/2  relative"
          >
            <h1 className="absolute flex overflow-hidden text-[8vw] font-semibold uppercase  top-1/2 left-full -translate-x-[50%]   -translate-y-[50%]    tracking-tighter z-[2] text-[#CDEA68] ">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" flex  gap-3 items-center mb-[1.5vw]">
              <div className="h-2 w-2 bg-white rounded-full"></div>
              <h4 className='font-["Neue Mentral"] uppercase'>fyde</h4>
            </div>
            <div className="card w-full relative h-[80vh]  rounded-xl ">
              <img
                className="w-full h-full object-cover object-center rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="btnlink my-[2vw]  ">
              {["audit", "copywrite", "sales deck", "slides design"].map(
                (elem, index) => (
                  <button
                    key={index}
                    className={`px-[1.7vw] py-[.3vw] ${
                      index !== 0 && "ml-[1.5vw]"
                    }  text-[1.1vw] text-white uppercase font-sans tracking-tighter  border-[1px] rounded-full`}
                  >
                    {elem}
                  </button>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handlehover(1)}
            onHoverEnd={() => handlehoverEnd(1)}
            className="cardcontainer w-1/2  relative"
          >
            <h1 className="absolute text-[8vw] flex font-semibold overflow-hidden uppercase  tracking-tighter top-1/2 -translate-y-[50%] right-full  z-[9] translate-x-[50%]  text-[#CDEA68]">
              {"vise".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" flex  gap-3 items-center mb-[1.5vw]">
              <div className="h-2 w-2 bg-white rounded-full"></div>
              <h4 className='font-["Neue Mentral"] uppercase'>Vise</h4>
            </div>
            <div className="card w-full h-[80vh]  rounded-xl relative ">
              <img
                className="w-full h-full object-cover object-center rounded-xl "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="btnlink my-[2vw] ">
              {["Agency", "company presentation"].map((elem, index) => (
                <button
                  key={index}
                  className={`px-[1.7vw] py-[.3vw] ${
                    index !== 0 && "ml-[1.5vw]"
                  }  text-[1.1vw] text-white uppercase font-sans tracking-tighter  border-[1px] rounded-full`}
                >
                  {elem}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
