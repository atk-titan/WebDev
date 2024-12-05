const zod = require("zod");

const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8,{msg:"the password not of appropriate length"})
                  .regex(/[A-Z]/,{msg:"must contain one capital alphabet"})
                  .regex(/[a-z]/,{msg:"must contain one small alphabet"})
                  .regex(/\d/,{msg:"must contain one number"})
});

const user={
    email:"gmane8451@gmail.com",
    password: "gmA123g"
};

console.log(schema.safeParse(user));