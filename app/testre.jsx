"use client"

import React from 'react'

const Testre = () => {
    const registerUser=async(e)=>{
        e.preventDefault();
        let name=e.target[0].value;
        let email=e.target[1].value;
        let phone=Number(e.target[2].value);
        let password=e.target[3].value;
        let url="http://localhost:3000/backend/register";
        let data={name:name,email:email,phone:phone,password:password};
        let res=await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        let response=await res.json();
        console.log(response);
    }
  return (
    <div>
        <form onSubmit={registerUser}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Testre