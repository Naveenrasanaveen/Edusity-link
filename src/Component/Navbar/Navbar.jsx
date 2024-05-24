import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'


const Navbar = () => {
   const[stick,setstick]=useState(false)


   useEffect(()=>{
     window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setstick(true):setstick(false)
     })
   },[])

    const [menubar,setmenubar]=useState(false)

   const togglemenu=()=>{
      menubar?setmenubar(false):setmenubar(true)
   }


  return (
     <nav className={`'container ${stick?"dark-nav":""}`}>
        <img src={logo} alt="logo" className='logo' />
        <ul className={menubar?"":"mobile-menu"} >
            <li>Home</li>
            <li>Program</li>
            <li>About US</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
        <img src={menu} alt="" className='menu-icon ' onClick={togglemenu} />
     </nav>
  )
}

export default Navbar