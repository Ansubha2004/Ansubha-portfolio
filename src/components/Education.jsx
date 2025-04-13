import React,{useState} from 'react'
import school1 from '../assets/images/school1.png'
import school2 from '../assets/images/school2.png'
import college1 from '../assets/images/college1.png'
import college2 from '../assets/images/college2.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";



export default function Education() {


  const [index,setIndex]=useState(0);
  const education=[FaSchool,MdSchool];
   const schoolpics=[school1,school2];
   const collegepics=[college1,college2];
   const rightscroll=()=>{
      setIndex((prevIndex)=>(prevIndex+1) % schoolpics.length);
   }
   const leftscroll=()=>{
    setIndex((prevIndex)=>(prevIndex-1 + schoolpics.length) % schoolpics.length);
 }

  return (
    <div className="absolute top-0 select-none">
      <main className="h-screen w-screen flex justify-center items-center">
        <div  className=" h-[75%] rounded-[20px] box-border p-[50px] w-[85%] bg-orange-200 flex mt-[25px]"> 
          <div className="relative h-[100%] w-[60%] overflow-hidden flex justify-center ">
            <div onClick={leftscroll}  className="absolute left-10 top-9/20 flex justify-center items-center p-[15px] rounded-[50%] bg-red-200 text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 hover:text-white"><FaArrowLeft  className="h-[30px] w-[30px] "/></div>
            <img src={schoolpics[index]} className="rounded-[20px] select-none"/>
            <div onClick={rightscroll}   className="absolute right-10 top-9/20 flex justify-center items-center p-[15px] rounded-[50%] bg-red-200 text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 hover:text-white"><FaArrowRight  className="h-[30px] w-[30px] "/></div>
            <div className="bg-red-200 absolute bottom-[30px] flex w-auto justify-evenly p-[2px] rounded-[20px] shadow-[0px_3px_20px_rgba(0,0,0,0.3)] gap-[2px]">
                    {education.map((Component,index)=>(
                      <button key={index} className="h-auto w-auto p-[10px] rounded-[20px] text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 focus:bg-red-500 hover:text-white focus:text-white"><Component className="h-[20px] w-[20px] "/></button>
                      ))} 
            </div>
          </div>
          <div className="box-border pl-10 w-[40%] overflow-auto ">
            
            <p className=" text-[#132238] text-[35px] font-bold font-[poppins] text-center">Pre-University Life</p>
            <br/>
            <ul className="list-disc">
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Completed schooling from <b>Assembly of Christ School</b>, affiliated with the <b>ISC Board</b>, and graduated as the Batch Topper.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Achieved <b>94.25%</b> in <b>Higher Secondary</b> (Class 12), with a strong focus on <b>Physics, Mathematics, and Computer Science</b>.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Actively participated in <b>science exhibitions</b>, showcasing innovative thinking and technical curiosity.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Developed a solid academic foundation along with essential soft skills like <b>communication, teamwork, and problem-solving</b>.</li>
            </ul>
            <br/>
            <br/>
            <span className="w-[90%] text-[#556070] text-[1rem]"><b>Official website: </b></span><a className="text-blue-500" href="https://assemblyofchristschool.com/" target="_blank">https://assemblyofchristschool.com/</a><br/>
            <span className="w-[90%] text-[#556070] text-[1rem]"><b>Location: </b></span><a className="text-blue-500" href="https://www.google.co.in/maps/place/Assembly+of+Christ+School,+Barrackpore/@22.7653249,88.3485748,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89ae570997157:0xe54eae66052ed52d!8m2!3d22.7653249!4d88.3511497!16s%2Fg%2F1q5blbgz0?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Barrackpore Cantonment, Kolkata-700120</a>
          </div>
        </div>
      </main>
    </div>
  )
}
