"use client"

import React from 'react';
import { useState } from 'react';

const About = () => {
  
      const [ownername, setOwnername] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [address, setAddress] = useState('');
       const [vehicle, setVehicle] = useState('');
       const [buttonText,setButtonText]=useState('Submit')
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setButtonText("Submitting... wait")

    const info = {
      ownername,
      email,
      phone,
      address,
      vehicle
    };

    try {
      const response = await fetch('/api/attachCar/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ info }) // Send the form data as JSON
      });

    //   if (!response.ok) {
    //     throw new Error('Failed to submit form');
    //   }

      const result = await response.json();
      alert(result.message); // Show success message
      setButtonText('Submit')
    } catch (error) {
      console.log(`Error submitting form:${error}`, error);
      alert('Failed to submit form. Please try again.');
      setButtonText('Submit')
    }
  };
  return (
    <div className='attach'>
     
      <form onSubmit={handleSubmit}>
      <h2>Attach a car</h2>
        <label>Enter your name:</label>
        <div className='field'>
          <input type="text" name="ownername" className='data' placeholder='Enter your name'  onChange={(e)=>{setOwnername(e.target.value)}} required/>
        </div>
        <label>Enter your email:</label>
        <div className='field'>
          <input type="email" name="email" className='data' placeholder='example@gmail.com'  onChange={(e)=>{setEmail(e.target.value)}} required/>
        </div>
        <label>Enter your number:</label>
        <div className='field'>
          <input type="number" name="phone" className='data' placeholder='Enter your phone'  onChange={(e)=>{setPhone(e.target.value)}} required/>
        </div>
        <label>Enter your address:</label>
        <div className='field'>
          <input type="text" name="address" className='data' placeholder='Enter your address' onChange={(e)=>{setAddress(e.target.value)}} required />
        </div>
        <label>Enter your vehicle:</label>
        <div className='field'>
          <input type="text" name="vehicle" className='data' placeholder='Enter vehicle details'  onChange={(e)=>{setVehicle(e.target.value)}} required/>
        </div>
        <button type="submit" id='button'>{buttonText}</button>

      </form>

    </div>
  )
}

export default About