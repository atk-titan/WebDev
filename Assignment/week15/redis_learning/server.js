import express, { json } from "express";
import Redis from "ioredis";
import axios from "axios";

const app = express();
const client = new Redis();

app.get("", async (req,res)=>{
    const cached = await client.get("todo:user_1");
    if(cached) return res.json(JSON.parse(cached));

    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await client.set("todo:user_1", JSON.stringify(result.data));
    await client.expire("todo:user_1",10);

    return res.json(result.data);
});

app.listen(3000, ()=>{
    console.log("server listening at localhost:3000");
});