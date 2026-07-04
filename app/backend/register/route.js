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

let User = new mongoose.model('User', dataschema);

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