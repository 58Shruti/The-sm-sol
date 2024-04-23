import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Footer from './Components/Footer';
import Services from './Components/Services';
import OurSoftwares from './Components/OurSoftwares';
import ContactUs from './Components/ContactUs';
import { Route, Routes } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css'




function App() {

   useEffect(() => {
         Aos.init();
   },[])       

  return (
    <>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/oursoftware' element={<OurSoftwares/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
  </Routes>
  
  <Footer/>
    </>
  )
}

export default App
