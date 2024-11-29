const express = require("express");

const app = express();
const port = 6000;

let count = 0;

const reqCnt =(req,res,next)=>{
    count+=1;
    next();
}

app.use(reqCnt);

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});
  
app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});
  
app.get('/requestCount', function(req, res) {
    res.status(200).json({ count });
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});