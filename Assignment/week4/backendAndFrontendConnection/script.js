const express = require("express");
const port = 3000;

const app = express();

//Cross-origin resourse sharing
const cors = require("cors");
app.use(cors());

app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a); 
    const b = parseInt(req.query.b);
    
    res.json({sum:a+b});
});

app.listen(port,()=>{    
    console.log(`Server is running at http://localhost:${port}`);
});