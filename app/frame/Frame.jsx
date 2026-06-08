import React from 'react'

const Frame = () => {
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