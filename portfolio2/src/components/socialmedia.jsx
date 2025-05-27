import React, { useEffect,useState } from "react";

function socialmedia({ Component, href }) {

    const [width,setwidth]=useState(window.innerWidth);
    useEffect(() => {
        setwidth(window.innerWidth);
    }, []);

  return (
    <a
      href={href}
      className="text-[#BABABA] rounded-[50%] w-auto h-auto p-2 border-[#BABABA] bg-[#575757]/40 border-[2px] active:text-[#FD6F00] active:border-[#FD6F00] border-solid transition-all duration-100 ease-out active:scale-[0.9] hover:opacity-[0.8]"
    >
      <Component size={(width>=640)?25:20} />
    </a>
  );
}

export default socialmedia;
