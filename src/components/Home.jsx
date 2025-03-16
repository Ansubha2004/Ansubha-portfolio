import React,{useEffect,useState,useRef} from 'react'
import {Link} from 'react-router-dom'
import profilepic from '../assets/images/profilepic.png'
import AOS from "aos"
import 'aos/dist/aos.css'


export default function Home() {

    const [width,setwidth]=useState(window.innerWidth)
    const hellobutton=useRef(null)

    

    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:200,
            easing:"linear",   
            once:true
        })

        setwidth(window.innerWidth)
        if(width<640)
        {
            hellobutton.current.setAttribute("data-aos-delay","0")
            console.log( hellobutton.current.getAttribute("data-aos-delay"))
        }
        else
        {
            hellobutton.current.setAttribute("data-aos-delay","1500")
            console.log(hellobutton.current.getAttribute("data-aos-delay"))
        }

        

    },[])
    useEffect(()=>{
        AOS.refresh();
    },[width])

  return (
    <div className="">
        <main className=" sm:h-screen h-auto w-screen font-[poppins] flex sm:flex-row  flex-col-reverse sm:justify-around items-center ">
            <div className="h-auto sm:max-w-[50%] w-full sm:text-left text-center sm:box-content box-border sm:px-0 px-[20px]" id="content">
                <br/>
                <p data-aos="fade-down" data-aos-delay="0" className="sm:text-[72px] text-[30px] text-[#132238]   font-[600] sm:leading-[90px]">Hello I'm <br/>ANSUBHA DHAR</p>
                <br/>
                <p className="text-[#556070] sm:text-[18px] text-[0.8rem]  " data-aos="zoom-out-up" data-aos-delay="1000">Hi! I am a passionate Web Developer as well as an undergraduate Electrical Engineer, from the city of Kolkata in West Bengal, India. I am open to collab for any web application projects or Hackathons & also seeking for intership opportunities. </p>
                <br/>
                <Link to="" className="hover:cursor-pointer hover:text-red-800 font-bold" ><button data-aos="fade" data-aos-delay="1500" ref={hellobutton} className="sm:px-[20px] px-[100px] py-[10px]  rounded-[7px] bg-red-500 text-white transition-all duration-300 linear hover:bg-red-800 active:bg-red-800">Say Hello!</button></Link>
                <br/><br/><br/>
                <div className="h-[100px] flex sm:flex-row flex-col text-[16px] text-[#424E60] ">
                    <div className="w-[250px] flex flex-col justify-center items-center  transition-all duration-200 bg-orange-200 mx-[2px] border-[2px] border-white hover:border-orange-400" data-aos="zoom-in-right" data-aos-delay="3000">
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
            <div className="sm:overflow-none overflow-hidden h-auto sm:rounded-[20px] rounded-full border-solid border-[3px] border-[#FDF6E3] transition-all duration-500 hover:border-[#fca5a5] active:border-red-300 bg-orange-200  border-box px-[40px]" data-aos="fade" data-aos-delay="1000" id="displaypic">
                <img className="sm:h-[70vh] h-[230px] "data-aos="zoom-in-up" data-aos-delay="1500" src={profilepic}/>
            </div>
        </main> 
    </div>
  )
}
