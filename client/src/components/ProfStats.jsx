import React from 'react'
import Profilecard from './Profilecard.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function ProfStats() {

  

  return (
    <div className="absolute top-0">
      <main className="h-auto w-auto ">
       <Profilecard  />
       <Skills />
       <Projects />
      </main>
    </div>
  )
}
