import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(userName:string,password:string,firstName:string,lastName:string){
    const res = await prisma.user.create({
        data:{
            userName,
            password,
            firstName,
            lastName
        },
        select:{
            id:true
        }
    });
    console.log(res);
}

interface updateParams{
    firstName:string;
    lastName:string;
}

async function updateUser(userName:string,updateParams:updateParams){
    await prisma.user.update({
        where:{
            userName:userName
        },
        data:{
            firstName:updateParams.firstName,
            lastName:updateParams.lastName
        },
        select:{
            id:true
        }
    });
}

async function getUser(userName:string){
    const res = await prisma.user.findUnique({
        where:{
            userName:userName
        }
    })
    console.log(res);
}

getUser("gma@gmail.com");