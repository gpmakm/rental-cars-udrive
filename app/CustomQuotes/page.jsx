import React from 'react'
import customquote from '../../public/CustomQuotes.json'
const CustomQuote = () => {
    const link="https://wa.me/?text="
  return (
    <div className='quoteContainer'>
        {
            customquote.map((quote,index)=>{
                return(
                    <div key={index} className='modernCard'>
                        <p>{quote.quote}</p>
                        <p className='author'> by {quote.author}</p>
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