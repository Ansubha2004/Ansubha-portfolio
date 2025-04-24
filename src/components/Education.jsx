import React,{useState,useRef,useEffect} from 'react'
import school1 from '../assets/images/school1.png'
import school2 from '../assets/images/school2.png'
import college1 from '../assets/images/college1.png'
import college2 from '../assets/images/college2.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Education() {


  const [index,setIndex]=useState(0);
  const education=[FaSchool,MdSchool];
   const schoolpics=[school1,school2];
   const collegepics=[college1,college2];
   const pics=[schoolpics,collegepics];

   const [a,seta]=useState(0);

   const rightscroll=()=>{
      setIndex((prevIndex)=>(prevIndex+1) % pics[a].length);
   }
   const leftscroll=()=>{
    setIndex((prevIndex)=>(prevIndex-1 + schoolpics.length) % pics[a].length);
 }

  const handleclick=(ind)=>{
    if(ind==0)
    {
      seta(c=>c=0);
    }
    else
    {
      seta(c=>c=1);
    }
  }
  useEffect(()=>{
    AOS.init({
        duration:700,
        delay:200,
        easing:"linear",
        
    })
    AOS.refresh();
  },[])
  
 

  return (
    <div className="absolute top-0 select-none">
      <main className="h-screen w-screen flex justify-center items-center">
        <div data-aos="fade-left" className=" h-[75%] rounded-[20px] box-border p-[50px] w-[85%] bg-orange-200 flex mt-[25px]"> 
          <div className="relative h-[100%] w-[60%] overflow-hidden flex justify-center ">
            
            <img data-aos="zoom-in-up" data-aos-delay="1000" src={pics[a][index]} className="rounded-[20px] select-none"/>
            <div data-aos="zoom-in-left" data-aos-delay="1100" onClick={leftscroll}  className="absolute left-10 top-9/20 flex justify-center items-center p-[15px] rounded-[50%] bg-red-200 text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 hover:text-white"><FaArrowLeft  className="h-[30px] w-[30px] "/></div>
            <div data-aos="zoom-in-right" data-aos-delay="1100" onClick={rightscroll}   className="absolute right-10 top-9/20 flex justify-center items-center p-[15px] rounded-[50%] bg-red-200 text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 hover:text-white"><FaArrowRight  className="h-[30px] w-[30px] "/></div>
            <div data-aos="zoom-in-down" data-aos-delay="1100" className="bg-red-200 absolute bottom-[30px] flex w-auto justify-evenly p-[2px] rounded-[20px] shadow-[0px_3px_20px_rgba(0,0,0,0.3)] gap-[2px]">
                    {education.map((Component,index)=>(
                      <button onClick={()=>handleclick(index)} key={index} className="h-auto w-auto p-[10px] rounded-[20px] text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 focus:bg-red-500 hover:text-white focus:text-white"><Component className="h-[20px] w-[20px] "/></button>
                      ))} 
            </div>
          </div>
          <div  className="box-border pl-10 w-[40%] overflow-auto ">
            
            <p className=" text-[#132238] text-[35px] font-bold font-[poppins] text-center">{(a==0)?`Pre-University Life`:`Undergraduation Life`}</p>
            <br/>
            {a==0?(<ul className="list-disc">
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Completed schooling from <b>Assembly of Christ School</b>, affiliated with the <b>ISC Board</b>, and graduated as the Batch Topper.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Achieved <b>94.25%</b> in <b>Higher Secondary</b> (Class 12), with a strong focus on <b>Physics, Mathematics, and Computer Science</b>.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Actively participated in <b>science exhibitions</b>, showcasing innovative thinking and technical curiosity.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Developed a solid academic foundation along with essential soft skills like <b>communication, teamwork, and problem-solving</b>.</li>
            </ul>):(<ul className="list-disc">
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Pursuing <b>B.Tech in Electrical Engineering</b> from the <b>Institute of Engineering and Management</b>, with a focus on both core and interdisciplinary subjects.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Consistently performed well academically, with a special emphasis on <b>circuit simulation, circuit designing and software development (web development)</b>.</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Participated in <b>technical fests and innovation challenges, hackathons</b>, contributing projects that merge software and hardware</li>
              <li className="w-[90%] text-[#556070] text-[0.9rem]">Strengthened essential soft skills such as <b>problem-solving, collaboration, public speaking, and project management</b> through academic and extracurricular engagements.</li>
            </ul>)}
            <br/>
            <br/>
            <span className="w-[90%] text-[#556070] text-[1rem]"><b>Official website: </b></span><a className="text-blue-500" href={a==0?`https://assemblyofchristschool.com/`:`https://iem.edu.in/`} target="_blank">{a==0?`https://assemblyofchristschool.com/`:`https://iem.edu.in/`}</a><br/>
            <span className="w-[90%] text-[#556070] text-[1rem]"><b>Location: </b></span><a className="text-blue-500" href={a==0?`https://www.google.co.in/maps/place/Assembly+of+Christ+School,+Barrackpore/@22.7653249,88.3485748,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89ae570997157:0xe54eae66052ed52d!8m2!3d22.7653249!4d88.3511497!16s%2Fg%2F1q5blbgz0?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D`:`https://www.google.com/maps/search/iem+management+address/@22.5714158,88.4284039,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D`} target="_blank">{a==0?`Barrackpore Cantonment, Kolkata-700120`:`Gurukul, Y-12, Block -EP, Sector-V, Salt Lake Electronics Complex, Kolkata – 700 091`}</a>
          </div>
        </div>
      </main>
    </div>
  )
}
