import React,{useRef,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { IoMenu } from "react-icons/io5"
import AOS from "aos";
import 'aos/dist/aos.css'
import navbarinfo from '../assets/jsondatas/navbar.json'

export default function Navbarbuttons(props) {
     
    
    console.log(props.type)

    
    const dropdown=useRef(null);
    const [active,setactive]=useState(false);
    const [degree,setdegree]=useState("rotate-z-0");
    const [visibility,setvisibility]=useState("hidden")

    const activate=()=>{
        console.log("old active state of menu:",active)
        setactive(prev=>!prev)
        
    }

    useEffect(()=>{

        AOS.init({
            duration:1000,
            easing:"ease-out-bounce"
        })

        console.log("updated active state of menu:",active);
        if(active==true)
        {
            setvisibility("visible")
            setdegree("rotate-z-90");
        }
        else
        {
            setvisibility("hidden")
            setdegree("rotate-z-0");
        }
    },[active,degree])

    const filternav=navbarinfo.filter((data)=> data.id!=navbarinfo.length)



  return (
    <div>
     {
        props.type=="desktop" ?  
            <div className="flex flex-row sm:space-x-15 sm:items-center sm:hover:cursor-pointer sm:text-[1rem]">
                {filternav.map((data,index)=>(<Link key={data.id} to={data.link} className="hover:cursor-pointer hover:text-red-800 font-bold py-3 border-solid border-b-[4px] border-[#FDF6E3] transition-all duration-300 hover:border-red-800">{data.buttontext}</Link>))}
                <Link to="/contactpage" className="hover:cursor-pointer hover:text-red-800 font-bold"><button className="px-[15px] py-[5px] rounded-[7px] bg-red-500 text-white transition-all duration-300 linear hover:bg-red-800">Contact Me</button></Link>
            </div>
            :
            <div>
                <IoMenu onClick={activate} className={`sm:hidden visible h-[60px] w-[60px] px-3 rounded-[50%] transition:all linear duration-300 hover:bg-red-200 active:bg-red-200 focus:bg-red-200 hover:text-red-900 active:text-red-900 ${degree}` } />
                <div ref={dropdown} data-aos="slide-left" className={` flex flex-col items-center fixed z-[4] bg-red-100 h-auto w-auto rounded-tl-[15px] rounded-br-[15px] top-[70px] right-[5px] overflow-hidden   ${visibility}`}>
                    {navbarinfo.map((data,index)=>(<Link to={data.link} key={data.id} onClick={activate} className="hover:cursor-pointer text-center  w-[200px] active:bg-red-800 active:text-white  py-5   transition-all duration-100 ">{data.buttontext}</Link>))}
                </div>
            </div>
     }
     </div>
   
  )
}
