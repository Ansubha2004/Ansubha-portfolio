import React from 'react'
import Profilecard from './Profilecard.jsx'
import Skills from './Skills.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function ProfStats() {

  

  return (
    <div className="absolute top-0">
      <main className="h-auto w-auto ">
       <Profilecard  />
       <Skills />
      </main>
    </div>
  )
}
