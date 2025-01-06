import React from 'react'
import Image from 'next/image'
import instagramLogo from './UdriveImages/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>

        Follow us on : <br />
        <div>
            <Image src={instagramLogo} width={30} height={30} id='socialmedia'/> - <a href="https://www.instagram.com/udrive_car?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">udrive_car</a>
           
        </div>


    </div>
  )
}

export default Footer