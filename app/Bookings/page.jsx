import React from 'react'

const Book_a_car = () => {
  return (
    <div><h2>Book a car</h2>
    <form action="" method="get">
        <label htmlFor="uname">Name</label>
        <div className="field">
            <input type="text" name="username" id="name" className="data" />
        </div>
        <label htmlFor="emailId">Email</label>
        <div className="field">
            <input type="email" name="email" id="emailId" className="data" />
        </div>
        <label htmlFor="phoneNum">Contact number</label>
        <div className="field">
            <input type="number" name="phoneNum" id="phoneNum" className="data" />
        </div>
        <label htmlFor="aadharNum">Aadhar number</label>
        <div className="field">
            <input type="number" name="aadharNum" id="aadharNum" className="data" />
        </div>
        <label htmlFor="panNum">PAN card number</label>
        <div className="field">
            <input type="text" name="panNum" id="panNum" className="data" />
        </div>
        <label htmlFor="vehicle">Vehicle name</label>
        <div className="field">
            <select name="vehicle" id="vehicleName">
                <option value="Scarpio S">Scorpio S - Rs. 4999/- per day</option>
                <option value="XUV 300(Sunroof)">XUV 300 Sunroof - Rs. 2799/- per day</option>
                <option value="Tata Safari">TATA Safari - Rs. 4999/- per day </option>
                <option value="Hyundai"> Hyundai - Rs. 1999/- per day</option>
                <option value="Thar">Thar</option>
                <option value="Renault">Renault</option>
                
            </select>
        </div>
        <label htmlFor="days">Days you rent</label>
        <div className="field">
            <input type="number" name="days" id="days" className="data" />
        </div>
        <label htmlFor="address">Delivery address</label>
        <div className="field">
            <input type="number" name="address" id="address" className="data" />
        </div>
        
        <button>Book the car</button>
    </form>
    
    
    </div>
  )
}

export default Book_a_car