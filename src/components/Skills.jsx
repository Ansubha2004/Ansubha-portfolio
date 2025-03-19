import React from 'react'
import skills from '../assets/jsondatas/skills.json'
import { MdDeveloperMode } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";





export default function Skills() {

  const skillicons=[MdDeveloperMode,FaGears,GiElectricalResistance]

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
       <p className="text-[50px] text-[#132238] mt-10   font-[600] leading-tight">Skill Statistics</p>
       <p className="text-[#556070] text-[18px] " >Electrifying Ideas, Powering the Web.</p>
       <div className="w-screen h-full flex ">
          <div className="min-w-[50%]  flex flex-col space-y-7 justify-center items-center">
            {skills.map((skill,index)=>(
              <div key={skill.id} tabIndex="0" className="w-[85%] border-solid border-[2px] border-[#FDF6E3] focus:outline-none shadow-[0px_0px_20px_rgba(0,0,0,0.3)] group hover:shadow-none focus:shadow-none  hover:border-orange-600 focus:border-orange-600 hover:border-l-[25px] focus:border-l-[25px] border-box p-[20px] rounded-[8px] flex transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
              <div  className="h-auto w-auto mr-4 flex items-center">{React.createElement(skillicons[index],{className:"h-[100px] w-[100px] group-hover:text-orange-600 group-focus:text-orange-600"})}</div>
              <div>
                <p className=" text-[#132238] text-[23px] font-bold leading-normal font-[poppins] group-hover:text-orange-600 group-focus:text-orange-600">{skill.header}</p>
                <p className="text-[#556070] text-[0.9rem] " >{skill.content}</p>
              </div>
            </div>))}
          </div>
          <div className="min-w-[50%] flex justify-center items-center">
            Work in progress
          </div>
       </div>
    </div>
  )
}
