const express = require('express');
const JWT = require('jsonwebtoken');
const zod = require("zod");

const app = express();
const port = 3000;
const jwtPass = "jwTpass";

app.use(express.json());

const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8,{msg:"the password not of appropriate length"})
                  .regex(/[A-Z]/,{msg:"must contain one capital alphabet"})
                  .regex(/[a-z]/,{msg:"must contain one small alphabet"})
                  .regex(/\d/,{msg:"must contain one number"})
});

const authVerify = (req,res,next) =>{

    JWT.verify(req.body.authentication,jwtPass);

    next();
}

const validateInput = (req, res, next) => {
    const email=req.body.email;
    const pass=req.body.pass;

    const validation = schema.safeParse({email:email,password:pass});
    
    if (!validation.success) {
        // Extract error messages
        return res.json(validation.error.issues[0].message);
    }
    next(); // Proceed to the next middleware or route handler
};

const authSign = (req,res) =>{
    const authToken = JWT.sign({email:req.body.email},jwtPass);

    res.json({authentication:authToken});
}

app.post('/',validateInput,authSign);

app.get('/',authVerify,(req,res)=>{
    res.send("verifyed");
});

app.listen(port,()=>{    
    console.log(`Server is running at http://localhost:${port}`);
});