const express = require("express");
const route = express.Router();

const {addUser , createCourse , viewCourses } = require("../DB/database");


route.post("/signup",async (req,res)=>{
    try{
        const user = req.body.username;
        const pass = req.body.password;
    
        await addUser(true,user,pass);
    
        res.send("new admin created");
    }
    catch(err){
        console.error("Error creating admin:", err);
        res.status(500).json({ error: "Failed to create admin. Please try again later." });
    }
});

route.get("/courses",async (req,res)=>{
    try{
        let courses = await viewCourses();
    
        res.json(courses);
    }
    catch(err){
        console.error("Error fetching courses:", err);
        res.status(500).json({ error: "Failed to load courses. Please try again later." });
    }
});

route.post("/courses",async (req,res)=>{
    try{
        const username=req.body.username;
        const title=req.body.title;
        const price=req.body.price;

        const course = await createCourse(username,title,price);

        res.json({
            message: 'Course created successfully', 
            courseId: course._id
        });
    }
    catch(err){
        console.error("issue while posting course : ",err);
        res.status(500).json({error: "issue while posting course"});
    }
});

module.exports = route;