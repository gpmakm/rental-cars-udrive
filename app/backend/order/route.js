
// "use server"
import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { OrderedBulkOperation } from 'mongodb';
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

export async function GET(req) {
    try {
        await connectDB();
        const resp = await Order.find({});
    } catch (err) {
        return NextResponse.json({

        })
    }


}

export async function POST(req) {

    await connectDB();

    try {

        const { name, phone, order, total } = await req.json();
        /*    console.log("Got post request with data:", { name, phone,order, total });*/
        const newOrder = new Order({
            name,
            phone,
            order,
            total
        });



        await newOrder.save();
        //console.log("Saved order")
        const emailSubject = 'Fruits order';
    //     const emailText = `
    //   Hello Boss!! Another fruits order
      
    //   ${name},
    //   :
    //   - Phone: ${phone}
    //   - Order: ${JSON.stringify(order)}
    //   - Total: ${total}
    // `;

        // Send email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: "admin@payal-fruits.in",
            subject: `🍎 New Order from ${name}`,

            text: `
New Payal Fruits Order

Customer: ${name}
Phone: ${phone}

${order.map(item =>
                `${item.name} - ${item.qty} ${item.unit} - ₹${item.price} - ₹${item.price * item.qty}`
            ).join("\n")}

Total: ₹${total}
    `,

            html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">

            <h2 style="color:#ff7043;">
                🍎 Payal Fruits - New Order
            </h2>

            <hr>

            <h3>Customer Details</h3>

            <p>
                <strong>Name:</strong> ${name}<br>
                <strong>Phone:</strong> ${phone}
            </p>

            <h3>Order Details</h3>

            <table style="
                width:100%;
                border-collapse:collapse;
                margin-top:10px;
            ">

                <thead>
                    <tr style="background:#ff7043;color:white;">
                        <th style="padding:10px;text-align:left;">Item</th>
                        <th style="padding:10px;">Quantity</th>
                        <th style="padding:10px;">Price</th>
                        <th style="padding:10px;">Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    ${orderRows}
                </tbody>

            </table>

            <hr>

            <h2 style="text-align:right;">
                Total: ₹${total}
            </h2>

            <p style="color:#666;">
                Please process this order.
            </p>

        </div>
    `
        };




        try {
            await transporter.sendMail(mailOptions);
            //console.log("Sent mail")
        }
        catch (err) {
            console.error(err)
        }


        return NextResponse.json(
            {
                success: true,
                message: "Order saved, proceed to payment!!",
                order: newOrder

            },
            {
                status: 201,
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