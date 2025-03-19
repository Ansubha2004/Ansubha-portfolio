import React, { useEffect, useState } from 'react';
import skills from '../assets/jsondatas/skills.json';
import { MdDeveloperMode } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
  const skillicons = [MdDeveloperMode, FaGears, GiElectricalResistance];

  const [focus, setFocus] = useState(null);
  const [skillset, setSkillset] = useState(skills[0]); 

  const handleFocus = (i) => {
    setFocus(i + 1);
  };
  useEffect(() => {

    const foundSkill = skills.find((data) => data.id === focus);
    if (foundSkill) {
      setSkillset(foundSkill);
    }
    AOS.refresh();
    
  }, [focus]);

  
  

  return (
    <div  className="w-screen h-screen flex flex-col justify-center items-center " >
      <p className="text-[50px] text-[#132238] mt-10 font-[600] leading-tight">Skill Statistics</p>
      <p className="text-[#556070] text-[18px]">Electrifying Ideas, Powering the Web.</p>
      <div className="w-screen h-full flex">
        
        <div className="min-w-[50%] flex flex-col space-y-7 justify-center items-end" >
          {skills.map((skill, index) => (
            <div
              onFocus={() => handleFocus(index)}
              key={skill.id}
              tabIndex="0"
              className="w-[85%] border-solid border-[2px] border-[#FDF6E3] focus:outline-none shadow-[0px_0px_20px_rgba(0,0,0,0.3)] group hover:shadow-none focus:shadow-none hover:border-orange-600 focus:border-orange-600 hover:border-l-[25px] focus:border-l-[25px] border-box p-[20px] rounded-[8px] flex transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            >
              <div className="h-auto w-auto mr-4 flex items-center">
                {React.createElement(skillicons[index], {
                  className: "h-[100px] w-[100px] group-hover:text-orange-600 group-focus:text-orange-600",
                })}
              </div>
              <div>
                <p className="text-[#132238] text-[23px] font-bold leading-normal font-[poppins] group-hover:text-orange-600 group-focus:text-orange-600">
                  {skill.header}
                </p>
                <p className="text-[#556070] text-[0.9rem]">{skill.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="min-w-[50%] flex flex-col items-center justify-center">
          {skillset && skillset.skilldata ? (
            skillset.skilldata.map((data, index) => (
              <div key={index} className="overflow-hidden flex h-auto bg-white w-[70%] m-2 rounded-md shadow">
                <p className="bg-orange-700 w-[30%] text-center text-white p-[15px] text-lg font-semibold">{data.skill}</p>
                <div className="w-[70%] flex bg-orange-300 box-border p-[4px]">
                  <div style={{ width: `${data.level}%` }} className={`h-full transition-all duration-1000 delay-300 bg-orange-400`}></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No skill selected</p>
          )}
        </div>
      </div>
    </div>
  );
}