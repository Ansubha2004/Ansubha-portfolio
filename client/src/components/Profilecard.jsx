import React,{useEffect} from 'react'
import socialmedia from '../assets/jsondatas/contact-details.json'
import profilepic2 from '../assets/images/profilepic2.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FiDownload } from "react-icons/fi";
import resume from '../assets/resume.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Profilecard() {

    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:200,
            easing:"linear",
            
        })
        AOS.refresh();
    },[])
    
  
    const socialmedia=[FaLinkedinIn,FaInstagram,FaGithub];
    const sociallinks=["https://www.linkedin.com/in/ansubha-dhar-856176296/","https://www.instagram.com/rikstar_bro/","https://github.com/Ansubha2004"]
  
  
    return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div data-aos="fade-right"  className=" h-auto rounded-[20px] box-border px-[50px] py-[90px] min-w-[1000px] w-[80%] bg-orange-200 flex mt-[25px]">
        <div className="min-w-[50%] flex flex-col items-center relative">
            <div className="h-auto w-[350px] rounded-[20px]  bg-orange-300  flex justify-center"  id="displaypic">
                <img data-aos="zoom-in-up" data-aos-delay="1000" className="h-[400px] w-[290px]" src={profilepic2}/>
            </div>
            <div data-aos="fade" data-aos-delay="800" className="bg-orange-200 absolute bottom-[-30px] flex w-[50%] justify-evenly py-[10px] rounded-[7px] shadow-[0px_3px_20px_rgba(0,0,0,0.3)]">
                    {socialmedia.map((Component,index)=>(
                      <a key={index} href={sociallinks[index]} target="_blank" className="h-auto w-auto p-[10px] rounded-[5px] text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 hover:text-white"><Component className="h-[30px] w-[30px] "/></a>
                      ))} 
            </div>

        </div>
        <div className="min-w-[50%]" data-aos="fade-up" data-aos-delay="1000">
            <p className=" text-[#132238] text-[35px] font-[600] leading-tight font-[poppins]">I am Engineer by Day, Developer by Passion</p>
            <p className=" text-orange-700 text-[15px] font-[600] mt-2 font-[poppins]">Full Stack Developer | ELectrical Undergraduate @IEM</p>
            <br/>
            <p className=" text-[#556070] text-[0.9rem]">I am a B.Tech Electrical Engineering undergraduate from the Institute of Engineering and Management with a strong passion for Full-Stack Web Development. I have intermediate expertise in Front-End, Back-End, frameworks, and DBMS, enabling me to build dynamic and efficient web applications. Beyond web development, I am deeply interested in cercuit designing/simulation as well as electronics projects, particularly IoT, sensors. I am committed to mastering my skills through continuous learning, competitive practice, participation in technical events, and collaborating on professional projects to drive innovation.</p>
            <br/>
            <div className="flex space-x-5">
            <a href="#projects" className="hover:cursor-pointer hover:text-red-800 font-bold" ><button className="px-[20px]  py-[8px]  rounded-[7px] bg-red-500 text-white transition-all duration-300 linear hover:bg-red-800">My Projects</button></a>
            <a href={resume} target="_blank" className="hover:cursor-pointer hover:border-red-800 font-bold" ><button className="flex space-x-2 justify-center items-center px-[20px]  py-[8px]  rounded-[7px] bg-red-500 text-white transition-all duration-300 linear hover:bg-red-800"><FiDownload className="h-[20px] w-[20px]"/> <p>Download CV</p></button></a>
            </div>
        </div>
      </div>
    </div>
  )
}
