import Header from './components/reusable_components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { Outlet } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from './components/reusable_components/Footer'
import Scroll from './components/reusable_components/Scroll'


function App() {

  useEffect(()=>{
    AOS.init();
},[])
  
  return (
    <>  
      <Header />
      <Outlet />
      <Footer />
      <Scroll />
    </>
  )
}

export default App
