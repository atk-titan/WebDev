const express = require('express');
const {createTodo,updateTodo} =require("./types");
const {todo} = require('./mongo ');
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const port = 3000;

app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        });
        return;
    }
    //put in mongoDb

    try{
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false,
        });

        res.json({msg:"new user created"});
    }
    catch(err){
        console.log("error in creating the todo: "+err);
    }

});

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});

    res.json({
        todos:todos
    })
});

app.put("/completed",async (req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        });
        return;
    }
    //put in mongoDb

    try{
        await todo.updateOne({
            _id:createPayload.id,
        },{
            completed:createPayload.status,
        });

        res.json({msg:"user updated"});
    }
    catch(err){
        console.error("the eerror realated to the upadating the todo status to completed : "+ err);
    }

});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})