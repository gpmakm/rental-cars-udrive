"use client"

import {React,useState} from 'react'
import customquote from '../../public/CustomQuotes.json'
const CustomQuote = () => {
    const [like, setLike] = useState();
    const [count,setCount] = useState(0);
    const link="https://wa.me/?text="
    const updateVal=()=>{
        setCount(count+1);
    }
  return (
    <div className='quoteContainer'>
        {
            customquote.map((quote,index)=>{
                return(
                    <div key={index} className='modernCard'>
                        <p>{quote.quote}</p>
                        <p className='author'> by {quote.author}</p>
                        <div>
                            <button className='like' onClick={updateVal}>
                               {count} likes 
                            </button>
                            <button className='comment'>Comment</button>
                        </div>
                        <a style={{
                            backgroundColor:'green',
                            color:'white',
                            padding:5
                        }} href={link+quote.quote+"\n "+quote.author}>Share via Whatsapp</a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CustomQuote