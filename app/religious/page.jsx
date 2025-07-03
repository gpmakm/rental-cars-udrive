"use client"

import React from 'react'
import quote from '../../public/ReligiousQuotes.json'
let link='https://wa.me/?text=';
const ReligiousQuote = () => {
    return (
        <div className='quoteContainer'>
            {
                quote.map((quote, index) => {
                    return (
                        <div key='index' className='religiousCard'>
                            <p>{quote.quote}</p>
                            <p className='author'> {quote.author}</p>
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

export default ReligiousQuote