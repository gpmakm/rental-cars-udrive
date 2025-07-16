import React from 'react'
import Image from 'next/image'
import instagramLogo from '../public/instagram.png'

const Footer = () => {
  return (
    <div className='footer' style={{height:50,width:100}}>

        Follow developer on : <br />
        <div>
           <a href="https://www.instagram.com/the_dev_page/?__pwa=1"> <Image src={instagramLogo} id='socialmedia' alt='Instagram - the_dev_page'/> - the_dev_page</a>
           
        </div>


    </div>
  )
}

export default Footer