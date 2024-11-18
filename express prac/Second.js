const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/res",(req,res)=>{
    const info = req.body.info;
    console.log(info);
    res.send("the length of the input is "+info.length);
});

app.use((err,req,res,next)=>{
    res.status(500).json({
        msg: "somethings wrong with input"
    });
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});