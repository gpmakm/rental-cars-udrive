import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
//import home from './UdriveImages/icons8-home.gif'
import homepic from '../public/home.png'
import religious from '../public/religious-quotes.jpeg'
import scientist from '../public/6633.jpg'
import portfolio from '../public/portfolio.jpeg'
import cimage from '../public/coders-quotes.jpeg'
import people from '../public/user.png'
const Navbar = () => {
  return (
    
   <nav>
    <span id="nav">SuktiSutram</span>
    <ul>
        <li><a href={"/"} className="links"><Image src={homepic} className={'linkIcon'} width={5} height={5} alt='Home'/></a>
        
        </li>
        <li> <a href={"/religious"} className='links'><Image src={religious} className={'linkIcon'} width={5} height={5} alt='Religious'/></a> </li>

        <li> <a href={"/modern"} className='links'><Image src={scientist} width={5} className={'linkIcon'} height={5} alt='Scientist'/></a> </li>

        <li> <a href={"/coders"} className='links'><Image src={cimage} width={5} className={'linkIcon'} height={5} alt='Home'/></a> </li>
         
          <li> <a href="/CustomQuotes" className='links'><Image src={people} className={'linkIcon'} width={5} height={5} alt='Home'/></a> </li>

           <li> <a href={"/my-portfolio"} className='links'><Image src={portfolio} width={5} className={'linkIcon'} height={5} alt='Home'/></a> </li>
       

    </ul>
    
   </nav>
  )
}

export default Navbar;