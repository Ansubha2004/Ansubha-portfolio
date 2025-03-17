import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import profilepic from '../assets/images/profilepic.png'
import AOS from "aos"
import 'aos/dist/aos.css'


export default function Home() {

    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:200,
            easing:"linear",
            once:false,
            mirror:true
        })
        AOS.refresh();
    },[])

  return (
    <div className="overflow-hidden absolute top-0 ">
        <main className=" h-screen w-screen font-[poppins] flex sm:justify-around items-center ">
            <div className="h-auto max-w-[50%]    " id="content">
                <br/>
                <p data-aos="fade-down" data-aos-delay="0" className="text-[72px] text-[#132238]   font-[600] leading-[90px]">Hello I'm <br/>ANSUBHA DHAR</p>
                <br/>
                <p className="text-[#556070] text-[18px]   " data-aos="zoom-out-up" data-aos-delay="1000">Hi! I am a passionate Web Developer as well as an undergraduate Electrical Engineer, from the city of Kolkata in West Bengal, India. I am open to collab for any web application projects or Hackathons & also seeking for intership opportunities. </p>
                <br/>
                <Link to="" className="hover:cursor-pointer hover:text-red-800 font-bold" ><button data-aos="fade" data-aos-delay="1500" className="px-[20px]  py-[10px]  rounded-[7px] bg-red-500 text-white transition-all duration-300 linear hover:bg-red-800">Say Hello!</button></Link>
                <br/><br/><br/>
                <div className="h-[100px] flex text-[16px] text-[#424E60] ">
                    <div className="w-[250px] flex flex-col justify-center items-center  transition-all duration-200 bg-orange-200 mx-[2px] border-[2px] border-white  hover:border-orange-400" data-aos="zoom-in-right" data-aos-delay="3000">
                        <p className="text-[2em] font-bold">150+</p>
                        <p className="text-[1rem]">LinkedIn Connections</p>
                    </div>
                    <div className="w-[250px] flex flex-col justify-center items-center  transition-all duration-200 bg-orange-200 mx-[2px] border-[2px] border-white hover:border-orange-400" data-aos="zoom-in-right" data-aos-delay="2500">
                        <p className="text-[2em] font-bold">10+</p>
                        <p className="text-[1rem]">Total Projects</p>
                    </div>
                    <div className="w-[250px] flex flex-col justify-center items-center  transition-all duration-200 bg-orange-200 mx-[2px] border-[2px] border-white hover:border-orange-400" data-aos="zoom-in-right" data-aos-delay="2000">
                        <p className="text-[2em] font-bold">4</p>
                        <p className="text-[1rem]">Event Participations</p>
                    </div>
                </div>
            </div>
            <div className="h-auto rounded-[20px]  border-solid border-[3px] border-[#FDF6E3] transition-all duration-500 hover:border-[#fca5a5]  bg-orange-200  border-box px-[40px]" data-aos="fade" data-aos-delay="1000" id="displaypic">
                <img className="h-[70vh]  "data-aos="zoom-in-up" data-aos-delay="1500" src={profilepic}/>
            </div>
        </main> 
    </div>
  )
}
