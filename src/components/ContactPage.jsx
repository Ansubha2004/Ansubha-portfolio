import React,{useEffect} from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import contactdetails from '../assets/jsondatas/contact-details.json'
import {Link} from 'react-router-dom'
import form from '../assets/jsondatas/formparameters.json'
import AOS from 'aos'
import 'aos/dist/aos.css'




export default function ContactPage() {


  //fectching location using nominatim api (open street map) and google map api
  const addressdata=contactdetails.find((data)=>data.id==1)
  const address=addressdata.content.replace(/ /g,"+");
  const address_url=`https://nominatim.openstreetmap.org/search?q=${address}&format=json`;
  let latitude,longitude;
  const fetchcoordinates=async ()=>{
     const response=await fetch(address_url);
     const data=await response.json();
     latitude=data[0].lat;
     longitude=data[0].lon;

     const googlemap=`https://www.google.com/maps?q=${latitude},${longitude}`;

     await updatejson(googlemap);

  }

  const updatejson=(linkmap)=>{
      contactdetails.forEach((data)=>{
         if (data.id==1)
            data.link=linkmap;
          console.log(data.link)
      })
  }

  useEffect(()=>{
    AOS.init({
        duration:700,
        delay:200,
        easing:"ease-out"
        
    })
    AOS.refresh();
    fetchcoordinates();
},[])


  
  

  




  const Connections=[FaLocationDot,SiGmail,FaPhoneAlt];
  const socialmedia=[FaLinkedinIn,FaInstagram,FaGithub];
  const sociallinks=["https://www.linkedin.com/in/ansubha-dhar-856176296/","https://github.com/Ansubha2004","https://www.instagram.com/rikstar_bro/"]
  

  return (
    <div className="absolute top-0">
        <main className="h-screen w-screen flex justify-center items-center ">
            <div data-aos="zoom-in-up" className=" h-auto rounded-[20px] box-border p-[50px] w-[80%] bg-orange-200 flex mt-[25px]"> 
               <div className="w-[50%]">
                  <p className=" text-[#132238] text-[35px] font-bold font-[poppins]">Let's Connect & Create</p>
                  <br/>
                  <p className="w-[90%] text-[#556070] text-[0.9rem]">I'd love to connect with you! Whether you have a project idea, a collaboration opportunity, or just want to say hello, feel free to reach out. Let’s create something amazing together!</p>
                  <br/>
                  {contactdetails.map((Details,index)=>(
                    <div key={Details.id}>
                    <a target="_blank" href={Details.link} className="group transition-all ease-out duration-200 h-auto  w-[90%] rounded-[7px] shadow-none hover:shadow-[0px_0px_35px_rgba(0,0,0,0.2)] p-[15px] flex">
                      <div  target="_blank" className="h-auto w-auto p-[10px] rounded-[5px] text-red-500 bg-red-300 group-hover:bg-red-500  group-active:bg-red-800 group-hover:text-white" >{React.createElement(Connections[index],{className:"h-[25px] w-[25px]"})}</div>
                      <div className="flex flex-col ml-3 font-[poppins] text-[15px] justify-center">
                        <p className=" text-[#556070] text-[0.9em]">{Details.header}<span> :</span></p>
                        <p className=" font-bold text-[1.1em] tracking-wider">{Details.content}</p>
                      </div>
                    </a>
                    <br/>
                  </div>))}
                  <div className="flex w-full space-x-7 ml-2">
                    {socialmedia.map((Component,index)=>(
                      <a key={index} href={sociallinks[index]} target="_blank" className="h-auto w-auto p-[15px] rounded-[5px] text-red-500 transition-all ease-out duration-200 hover:bg-red-500  active:bg-red-800 hover:text-white"><Component className="h-[30px] w-[30px] "/></a>
                      ))} 
                  </div>
               </div>
               <div className="w-[50%] flex flex-col justify-center items-start">
                <p className="text-[#556070] text-[0.9rem]">Let's connect! Fill out the form below, and I'll get back to you as soon as possible. Looking forward to hearing from you!</p>
                <br/><br/>
                <form className="w-full">
                    <div >
                      {form.map((data,index)=>(
                        <input key={data.id} type={data.type} className="h-[40px] focus:outline-none   w-full border-b-[1px] border-b-gray-500 border-b-solid border-box px-2 mb-5 hover:placeholder-red-600 hover:border-b-red-600 active:border-b-red-600" name={data.name} placeholder={data.placeholder}></input>
                      ))}
                    </div>
                    <br/><br/>
                    <Link to="" className="hover:cursor-pointer hover:text-red-800 font-bold" ><button className="px-[20px]  py-[10px]  rounded-[7px] bg-red-500 text-white transition-all duration-300 linear hover:bg-red-800">Submit</button></Link>

                </form>
               </div>
            </div>
        </main>
      
    </div>
  )
}
