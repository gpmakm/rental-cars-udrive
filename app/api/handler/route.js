

import nodemailer from 'nodemailer';

// import 'dotenv/config'; // Load environment variables
// require('dotenv').config();

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // SMTP host, // Use Gmail or any other service
  
  auth: {
    user: "esikshatutorialsakarsh@gmail.com", // Your email address
    pass: "hhrn oqci ymyb lpdk", // Your email password or app-specific password
  },
});

export async function POST(request) {
  try {
    
    
    const data = await request.json();
    //console.log('Received form data:', data);
    const { username, email, phoneNum, aadharNum, vehicle, days, address } = data.info;
    
    

    const emailSubject = 'Car booking request';
    const emailText = `
      Hello Boss!! Another car booking order
      
      ${username},
      :
      - Email: ${email}
      - Phone: ${phoneNum}
      - Aadhar Number: ${aadharNum}
      - Vehicle: ${vehicle}
      - Days: ${days}
      - Address: ${address}
    `;

    // Send email
    const mailOptions = {
      from:"esikshatutorialsakarsh@gmail.com" , // Sender address
      to: "udrive.carrental01@gmail.com", // Recipient address
      subject: emailSubject, // Email subject
      text: emailText, // Email body (plain text)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return new Response(JSON.stringify({ message: "Form submitted successfully! Email sent." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:"+ error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "POST", // Allow POST requests
      },
    });

    // Extract form data

}