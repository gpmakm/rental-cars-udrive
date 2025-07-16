import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
//import home from './UdriveImages/icons8-home.gif'

const Navbar = () => {
  return (
    
   <nav>
    <span id="nav">SuktiSutram</span>
    <ul>
        <li><a href={"/"} className="links">Home</a></li>
        <li> <a href={"/religious"} className='links'>Religious quotes</a> </li>
        <li> <a href={"/modern"} className='links'>Modern quotes</a> </li>
        <li> <a href={"/coders"} className='links'>Coders quotes</a> </li>
         
          <li> <a href="/CustomQuotes" className='links'>People quotes</a> </li>
           <li> <a href={"/my-portfolio"} className='links'>Dev's portfolio</a> </li>
       

    </ul>
    
   </nav>
  )
}

export default Navbar;