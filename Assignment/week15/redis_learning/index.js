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
    }, 4401);

    // let unreadMessages = "messages:unread";
    // let res3 = await client.lpush(unreadMessages,['hii how are you',"what are you doing","tell me about yourself"]);

    // res3 = await client.lrange(unreadMessages,0,-2);

    // console.log(res3);

    return;
}

init();