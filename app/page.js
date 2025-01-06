import Image from 'next/image';
import React from 'react'
import Head from 'next/head';
import applog from './UdriveImages/Applogo.jpg'
import Footer from './Footer';

const page = () => {

  return (



  
    <div className="container">
      <Head>
        <title>udrive | Your Trusted Car Rental</title>
        <meta name="description" content="Your trusted partner in car rentals" />
      </Head>
      
      <header className="header">
        
      <Image src={applog} width={300} height={300}/>
        <h1 className="title">Welcome to udrive</h1>
        <p> Your trusted partner in car rentals. Explore our wide range of vehicles and services to suit all your travel needs. <br/>
        Contact us at :- +91 8109112179, Address:- Saket nagar, BDA complex bhopal, Bhopal, MP, 462025
        </p>
     
      <main className="main">
      <div className="fading-text">U-drive cars</div> <br/>
       
      </main>
      
   
      </header>
      <div className='aboutUs'>
        <h3>About us</h3>
        <p>We are leading car renting professionals from Bhopal, India. We have all type of cars for each and every ocassions and functions. Also for your trips. We provide bhaukaal, personality representative cars for each kind of person.</p>
      </div>
      {/* <footer className="footer">
        &copy; 2025 udrive. All rights reserved.
      </footer> */}
      <Footer/>
    </div>
 



     
  )
}

export default page