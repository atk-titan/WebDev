const express = require('express');
const {createTodo,updateTodo} =require("./types");

const app = express();

app.use(express.json());

const port = 3000;

app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        });
        return;
    }
    //put in mongoDb


});

app.get("/todos",(req,res)=>{

});

app.put("/completed",(req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        });
        return;
    }


});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})