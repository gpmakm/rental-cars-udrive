"use client"

import React from 'react'
import { useState } from 'react'
const Form = (props) => {
  const [name, setname] = useState()
  const [quote, setquote] = useState()

  const updateName=(e)=>{

    setname(e.target.value);
  }
  const updateQuote=(e)=>{
    setquote(e.target.value)
  }
  const submitForm=async (e)=>{
    e.preventDefault();
    

   
      
      let r=await fetch('/post',{
      method:'POST',
      body:JSON.stringify({
        name:name,
      quote:quote
      }),
      headers:{
        'Content-Type':'application/json'
      }
      
    })
    alert("Congratulations!! Quote posted successfully!!")
    
    
      
   
    
    
    
  }
  return (
    <div>
        
      <form onSubmit={submitForm}>
        <label htmlFor="name">Display name</label>
        <div className='field'>
            <input type="text" name={name} id="name" placeholder='Enter your name' onChange={updateName} />
        </div>
        <label htmlFor="quote">Your quote</label>
        <div className='field'>
            <input type="text" name={quote} id="quote" placeholder='Enter your quote' onChange={updateQuote} />
        </div>
        <button> {props.buttonTitle} </button>
      </form>
    </div>
  )
}

export default Form