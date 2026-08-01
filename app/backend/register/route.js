import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";




function connect() {
    mongoose.connect(process.env.DATABASE_LINK).then(() => { console.log("Connected to db") }).catch((e) => { console.error(`Error in connecting to db ${e}`) });
}

let dataschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    passw: String
})
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

const User =
    mongoose.models.User ||
    mongoose.model("User", dataschema);

const Order =
    mongoose.models.Order ||
    mongoose.model("Order", orderSchema);

module.exports = Order;

export async function POST(req) {
    let { name, email, password, phone } = await req.json();
    connect();
    try {
        let new_registration = new User({ name: name, email: email, phone: phone, passw: password });
        await new_registration.save();
        return NextResponse.json({ message: "User registered successfully for test" });
    } catch (e) {
        return NextResponse.json({ message: `Error in registering user ${e}` });
    }

}