
// "use server"
import { NextResponse } from "next/server";
import mongoose from "mongoose";

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
            "Access-Control-Allow-Origin": "http://localhost",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    });
}
export async function POST(req) {

    await connectDB();

    try {

        const { name, phone, order, total } = await req.json();

        const newOrder = new Order({
            name,
            phone,
            order,
            total
        });

        await newOrder.save();

        return NextResponse.json(
            {
                success: true,
                message: "Order saved, proceed to payment!!"
               // order:newOrder
            },
            { status: 201,
                headers: {
                     "Access-Control-Allow-Origin": "http://localhost",
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