"use client"

import React from 'react'
import quote from '../../public/CodersQuotes.json'
let link='https://wa.me/?text=';
const CodersQuotes = () => {
    
       
        
        
    
  return (
    <div className='quoteContainer'>
        <h2>CodersQuotes</h2>
        {

            quote.map((quote,index)=>{
                return (
                    <div key={index} className='codersQuotes'>
                        <p>{quote.quote}</p>
                        <p className='author'>{quote.author}</p>
                       
                        <a style={{
                            backgroundColor:'green',
                            color:'white',
                            padding:5
                        }} href={link+quote.quote+" \n - "+quote.author} target='_blank'>Share on whatsapp</a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CodersQuotes