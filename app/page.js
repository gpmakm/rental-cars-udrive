import Image from 'next/image';
import React from 'react'
import Head from 'next/head';
import Form from './Components/Form';
import geetaPic from '../public/geetaPic.jpg'
import quranPic from '../public/quranPic.jpg'
import biblePic from '../public/biblePic.jpg'

const page = () => {

  return (



  
    <div className="container">
      <p style={{width:300
      ,margin:5,border:'1px solid grey',borderRadius:28,padding:15}}>
        Welcome to our website. The one platform to provide you free and sharable quotes of multiple categories like modern, religious, coders and more. If you are feeling demotivated, tired from the tensions of the physical world or need any quote for your status updates get all kinds of them here. 
        <a href='#uploadQuote'>Post your custom quote</a>
      </p>
      <div className='homeContainer'>
       <div className='religiousquote'>
          <Image src={geetaPic} width={200} height={100} alt='BhagwatGeeta Pic'/>
          <p>Choose a great battlefield then you will find a better you.</p>
       </div>
       <div className='religiousquote'>
<Image src={quranPic} width={200} height={100} alt='Quran Pic'/>
 <p>Just trust on Allah, he will give you a better life.</p>
       </div>
       <div className='religiousquote'>
<Image src={biblePic} width={200} height={100} alt='Bible Pic'/>
 <p>Be kind so that God be kind on you.</p>
       </div>
      </div>
      <div id='uploadQuote'>
        <Form buttonTitle="Post my quote"/>
      </div>
     </div>
 



     
  )
}

export default page