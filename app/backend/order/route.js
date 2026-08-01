//import {NextResponse} from 'next/server'
 //import Order from '../register/route'

import { NextResponse } from "next/server";
import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_LINK);
        console.log("Connected to db");
    } catch (e) {
        console.error(`Error in connecting to db ${e}`);
    }
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
                message: "Order placed !!"
            },
            { status: 201 }
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