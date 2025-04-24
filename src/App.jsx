import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import {Route,Routes} from 'react-router-dom'
import ContactPage from './components/ContactPage.jsx'
import ProfStats from './components/ProfStats.jsx'
import Education from './components/Education.jsx'



function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path="/professionalstats" element={
          <ProfStats />
        }/>
        <Route path="/education" element={
          <Education />
        }/>
        <Route path="/contactpage" element={
          <ContactPage />
        }/>
      </Routes>
    </>
  )
}

export default App
