import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
//import home from './UdriveImages/icons8-home.gif'
import homepic from '../public/home.svg'
import religious from '../public/religious-quotes.svg'
import scientist from '../public/6633.svg'
import portfolio from '../public/portfolio.svg'
import cimage from '../public/coders-quotes.svg'
import people from '../public/user.svg'
const Navbar = () => {
  return (
    
   <nav>
    <span id="nav">SuktiSutram</span>
    <ul>
        <li><a href={"/"} className="links">Home</a>
        
        </li>
        <li> <a href={"/religious"} className='links'>Religious quotes</a> </li>

        <li> <a href={"/modern"} className='links'>Quotes for modern era</a> </li>

        <li> <a href={"/coders"} className='links'>Quotes for coders</a> </li>
         
          <li> <a href="/CustomQuotes" className='links'>Post your quotes</a></li>

           <li> <a href={"/my-portfolio"} className='links'>Developer portfolio</a></li>
       
{/* <Image src={homepic} className={'linkIcon'} quality={100} width={5} height={5} alt='Home'/><Image src={portfolio} width={5} quality={100} className={'linkIcon'} height={5} alt='Home'/></a><Image src={people} className={'linkIcon'} quality={100} width={5} height={5} alt='Home'/> <Image src={cimage} width={5} className={'linkIcon'} quality={100} height={5} alt='Home'/> <Image src={scientist} width={5} className={'linkIcon'} quality={100} height={5} alt='Scientist'/><Image src={religious} className={'linkIcon'} quality={100} objectFit='contain' width={5} height={5} alt='Religious'/> */}
    </ul>
    
   </nav>
  )
}

export default Navbar;