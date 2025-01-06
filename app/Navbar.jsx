import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import home from './UdriveImages/icons8-home.gif'

const Navbar = () => {
  return (
    
   <nav>
    <span id="nav">Udrive car rental</span>
    <ul>
        <li><Link href={"/"} className="links">Home</Link></li>
        <li> <Link href={"/attach-your-car"} className="links">Attach-car</Link> </li>
       
        <li> <Link href={"/cars"} className="links">Cars</Link> </li>
        <li> <Link href={"/bookings"} className="links" id='bookIt'>Book a car</Link> </li>
    </ul>
    
   </nav>
  )
}

export default Navbar;