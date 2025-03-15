import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import {Route,Routes} from 'react-router-dom'
import ContactPage from './components/ContactPage.jsx'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path="/contactpage" element={
          <ContactPage />
        }/>
      </Routes>
    </>
  )
}

export default App
