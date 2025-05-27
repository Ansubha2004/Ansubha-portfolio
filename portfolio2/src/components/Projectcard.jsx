import React from "react";
import Button from "../components/Button.jsx";

function Projectcard({ deploy, github, name, description }) {
  return (
    <div className="min-w-full sm:min-w-[400px] aspect-[4/5]  rounded-[30px] bg-[#FFFFFF10] border-solid border-[3px] border-orange-500 border-box px-5 py-13 flex flex-col justify-between items-center">
      <p className="font-bold text-orange-600 text-[2rem] sm:text-[1.5rem] underline leading-relaxed underline-offset-10	 text-center">
        {name}
      </p>
      <p className="w-[90%] text-[1.2rem] sm:text-[1rem] text-white">
        <b className="text-orange-400">Description: </b>
        {description}
      </p>
      
      <div className="w-full h-auto flex justify-around">
        {deploy && (
          <Button
            content="Live Preview"
            handleClick={() => window.open(deploy)}
            themecss="btn-orange sm:text-[0.8rem]"
          />
        )}
        <Button
          content="Repository Link"
          handleClick={() => window.open(github)}
          themecss="btn-black sm:text-[0.8rem]"
        />
      </div>
    </div>
  );
}

export default Projectcard;
