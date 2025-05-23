import React,{useState,useRef,useEffect} from 'react'


export default function Projects() {

    
    const token=import.meta.env.VITE_GITHUB_REST_API_TOKEN;

    const [repo,setrepo]=useState([])

    const fetchgit=async ()=>{
        try{
            const response=await fetch("https://api.github.com/users/Ansubha2004/starred",{
                method:"GET",
                headers:{
                    Authorization:`token ${token}`
                }
            })

            if(!response.ok)
            {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data=await response.json();
            setrepo(data);
            

        }
        catch (error)
        {
            console.error("Error occured: ",error);
        }
    }

    

    useEffect(()=>{
        fetchgit();
    },[])

    useEffect(()=>{
        
    },[repo])

  return (
    <div id="projects" className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden box-border px-20 ">
      <p className="text-[50px] text-[#132238] mt-10 font-[600] leading-tight">My Projects</p>
      <p className="text-[#556070] text-[18px]">Bridging Code & Innovation: My Project Showcase</p>
      <div className="h-full w-full flex  items-center gap-20 overflow-x-auto scroll-smooth no-scrollbar box-border px-7 ">
        {repo.map((repository,index)=>(
            <div key={index} className="relative min-w-[350px] h-[450px] bg-orange-400 flex items-center justify-start rounded-[15px] shadow-lg box-border px-5 py-10 flex-col text-center hover:shadow-gray-400 transform hover:scale-105 transition-all duration-300">
                <p className="text-[#132238] text-[23px] font-bold leading-normal font-[poppins] group-hover:text-orange-600 group-focus:text-orange-600 ">
                  {repository.name.split("-").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join("-")}
                </p>
                <br/>
                <p className="text-[#556070] text-[0.9rem] bg-orange-200 rounded-[10px] box-border p-7 shadow-[inset_0px_0px_20px_rgba(234,88,12,1)]">{repository.description}</p>
                
                <a href={repository.homepage} className="absolute bottom-17  w-[80%] hover:cursor-pointer hover:text-red-800 font-bold"><button className="w-full px-[15px] py-[5px] rounded-[7px] bg-red-700 text-white transition-all duration-300 linear hover:bg-red-900 ">Live Preview</button></a>
                <a href={repository.svn_url} className="absolute bottom-7 w-[80%] hover:cursor-pointer hover:text-red-800 font-bold"><button className="w-full px-[15px] py-[5px] rounded-[7px] bg-red-700 text-white transition-all duration-300 linear hover:bg-red-900">Repository</button></a>
            </div>
        ))}
       </div>
    </div>

  )
}
