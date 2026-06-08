import React from 'react'

const page = () => {
  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
        }}>
            <input type="file" placeholder="Upload your day" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default page