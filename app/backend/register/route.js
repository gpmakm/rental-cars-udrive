import { NextResponse,NextRequest } from "next/server";
import mongoose from "mongoose";




function connect(){
    mongoose.connect(process.env.DATABASE_LINK).then(()=>{console.log("Connected to db")}).catch((e)=>{console.error(`Error in connecting to db ${e}`)});
}

let dataschema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    passw:String
})

let user=new mongoose.model('user',dataschema);

export async function POST(req){
    let data={name,email,password,phone}=await req.json();
    connect();
    try{
        let new_registration=new user({name,email,phone,passw:password});
    await new_registration.save();
    return NextResponse.json({message:"User registered successfully"});
    } catch(e){
        return NextResponse.json({message:`Error in registering user ${e}`});
    }
    
}