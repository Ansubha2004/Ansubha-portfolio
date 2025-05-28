import React from "react";
import useAOS from "../hooks/useAOS.jsx"

function skillchart({ level, skillname,animation,delay }) {

  useAOS();
  return (
    <>
      <div
      data-aos={animation}
      data-aos-delay={delay}
        className="sm:w-[12%] w-[30%]  aspect-square rounded-[50%] p-4 transition-all linear duration-300"
        style={{
          background: `conic-gradient(#E46400 0% ${level}%, #95959540 0deg 360deg)`,
        }}
      >
        <div className="w-full  aspect-square rounded-[50%]  bg-[#121212] flex justify-center items-center">
          <p className="font-bold text-[#959595] ">{skillname}</p>
        </div>
      </div>
    </>
  );
}

export default skillchart;
