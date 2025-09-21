import client from "./redisClient.js";

async function init(){
    let res = await client.get("user:3");
    await client.set("user:3","mane");
    await client.expire("user:3",4);

    res = await client.get("user:3");
    console.log(res);

    setTimeout(async ()=>{
        res = await client.get("user:3");
        console.log(res);
    }, 4000);
}

init();