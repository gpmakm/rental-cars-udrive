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
        <div className="quoteContainer">
            {/* Display uploaded files or other content */}
        </div>
    </div>
  )
}

export default page