import './App.css'
import Navbar from './components/Navbar.jsx';
import Homescreen from './pages/Homescreen.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from "./pages/Contact.jsx"
import Footer from "./pages/Footer.jsx"

function App() {
  

  return (
    <div className="relative hide-scrollbar">
      <Navbar />
      <main className="w-full h-auto relative ">
        <Homescreen />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer/> 
    </div>
  )
}

export default App
