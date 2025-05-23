import React,{useRef,useEffect,useState} from 'react'
import logo from '../assets/images/logo.png'
import Navbarbuttons from './Navbarbuttons'
import AOS from "aos";
import 'aos/dist/aos.css'


export default function Navbar() {

    
    
    const navbar=useRef(null);

    const [navbarwidth,setnavbarwidth]=useState(window.innerWidth)
    const [type,settype]=useState("desktop");

    
    useEffect(()=>{


        

        setnavbarwidth(window.innerWidth)
        if(navbarwidth>=640)
        {
            settype("desktop");
        }
        else
        {
            settype("mobile")
        }
        
    },[navbarwidth])
    

  return (
    <div className="font-serif ">
      <div ref={navbar} className="relative bg-[#FDF6E3] min-h-[90px] w-screen flex justify-between items-center box-border z-[7] sm:px-[90px] px-[20px]">
        <img src={logo} className="sm:h-[53px] sm:w-[193px] h-[50px] "></img>
        <Navbarbuttons type={type} />
      </div>
    </div>
  )
}
