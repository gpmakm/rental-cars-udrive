// email.js
import nodemailer from 'nodemailer';

// Create a transporter object using SMTP
// email.js
import nodemailer from 'nodemailer';

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail or any other service
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'your-email-password', // Your email password or app-specific password
  },
});

// Function to send an email
export const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender address
      to, // Recipient address
      subject, // Email subject
      text, // Email body (plain text)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};