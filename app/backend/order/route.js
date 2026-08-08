
// "use server"
import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail', // SMTP host, // Use Gmail or any other service
  
  auth: {
    user: process.env.SENDER_EMAIL, // Your email address
    pass: process.env.SENDER_PASSWORD, // Your email password or app-specific password
  },
});
async function connectDB() {

    if (mongoose.connection.readyState >= 1)
        return;

    await mongoose.connect(process.env.DATABASE_LINK);

}

const orderSchema = new mongoose.Schema({
    name: String,
    phone: String,

    order: [
        {
            name: String,
            price: Number,
            unit: String,
            qty: Number
        }
    ],

    total: Number,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// const User =
//     mongoose.models.User ||
//     mongoose.model("User", dataschema);

const Order =
    mongoose.models.Order ||
    mongoose.model("Order", orderSchema);
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "https://payal-fruits.in",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    });
}
export async function POST(req) {

    await connectDB();

    try {

        const { name, phone, order, total } = await req.json();
        console.log("Got post request with data:", { name, phone, order, total });
        const newOrder = new Order({
            name,
            phone,
            order,
            total
        });
        console.log( process.env.SENDER_EMAIL, // Your email address
     process.env.SENDER_PASSWORD);
        

        await newOrder.save();
        const emailSubject = 'Fruits order';
    const emailText = `
      Hello Boss!! Another fruits order
      
      ${name},
      :
      - Phone: ${phone}
      - Order: ${JSON.stringify(order)}
      - Total: ${total}
    `;

    // Send email
    const mailOptions = {
      from: process.env.SENDER_EMAIL, // Sender address
      to: "admin@payal-fruits.in", // Recipient address
      subject: emailSubject, // Email subject
      text: emailText, // Email body (plain text)
    };
      
    

   
try{
    const info = await transporter.sendMail(mailOptions);
}
catch(err){
    console.error(err)
}
    

        return NextResponse.json(
            {
                success: true,
                message: "Order saved, proceed to payment!!"
               // order:newOrder
            },
            { status: 201,
                 headers: {
            "Access-Control-Allow-Origin": "https://payal-fruits.in",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    }
        );

    } catch (err) {

        console.error(err);

        return NextResponse.json(
            {
                success: false,
                message: err.message
            },
            { status: 500 }
        );
    }
}