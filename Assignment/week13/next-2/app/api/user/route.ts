import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name:"gaurrav",
        email:"gmane8451@gmail.com"
    });
}

export async function POST(req:NextRequest){
    //database logic
    const body:{username:string} = await req.json();
    return NextResponse.json({
        msg:"data added",
        data: body.username,
    });
}