const express = require("express");
const route = express.Router();

const {addUser , viewCourses , purchaseCourse , getPurchasedCourse} = require("../DB/database");

route.post("/signup",async (req,res)=>{
    try{
        const user = req.body.username;
        const pass = req.body.password;
    
        await addUser(false,user,pass);
    
        res.send("new user created");
    }
    catch(err){
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Failed to create user. Please try again later." });
    }
});

route.post("/courses",async (req,res)=>{
    try{
        const username = req.body.username;
        const courseId = req.body.courseId;

        await purchaseCourse(username,courseId);
        
        res.send("the course is purchased");
    }
    catch(err){
        console.error("there is error in purchasing the course");
        res.status(500).json({error:"the purchasing error is : "+err});
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

route.get("/purchasedCourses",async (req,res)=>{
    try{
        const username = req.body.username;

        let courses = await getPurchasedCourse(username);
    
        res.json(courses);

    }
    catch(err){
        console.error("Error fetching pusrchased courses:", err);
        res.status(500).json({ error: "Failed to load purchased courses. Please try again later." });
    }
});

module.exports = route;