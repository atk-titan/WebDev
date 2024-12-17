const express = require('express');
const app = express();
const port = 3000;

const adminRoute = require('./routes/admins');
const userRoute = require('./routes/users');

app.use(express.json());
app.use("/admin",adminRoute);
app.use("/user",userRoute);

app.listen(port,()=>{    
    console.log(`Server is running at http://localhost:${port}`);
});