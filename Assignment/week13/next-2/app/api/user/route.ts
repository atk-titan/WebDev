export function GET(){
    return Response.json({
        name:"gaurrav",
        email:"gmane8451@gmail.com"
    });
}

export function POST(){
    //database logic
    return Response.json({
        msg:"data added"
    })
}