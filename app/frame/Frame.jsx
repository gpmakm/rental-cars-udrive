"use client"

import {React,useState} from 'react'

const Frame = () => {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div>
        <div>
            <Image src={geetaPic} width={200} height={100} alt='BhagwatGeeta Pic'/>
        </div>
        <div className="buttons">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
        </div>
    </div>
  )
}

export default Frame