"use server"
import { NextResponse } from "next/server"
import fs from 'fs';
import path from "path";

export  async function POST(request) {

    try {
        
   const {name,quote}=await request.json();

   
    
    let address=path.join(process.cwd(),"public","CustomQuotes.json");

const fileData=fs.readFileSync(address,'utf-8')
const jsnArray=JSON.parse(fileData)
jsnArray.push({"author":name,"quote":quote})
fs.writeFileSync(address,JSON.stringify(jsnArray,null,2))
    return  NextResponse.json({message:true,status:200});
    } catch (error) {
        return  NextResponse.json({message:false,status:400});

    }

}