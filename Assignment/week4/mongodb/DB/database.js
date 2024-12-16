const mongoose = require("mongoose");
const crypto = require('crypto');

mongoose.connect("mongodb+srv://gmane8451:UIWBU3boNS4FIvBm@cluster0.feaga.mongodb.net/Udemy")
    .then(()=>console.log("mongoDb connection successful"))
    .catch((err)=>console.log("connection error occured"+"/t connot connect with MongoDB : ",err))

// Define User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
}, { timestamps: true });

// Define Course Schema
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Define Admin Schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    uploadedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
}, { timestamps: true });

// Create Models
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);
const Admin = mongoose.model('Admin', adminSchema);

async function addUser(admin,username,password){
    try{
        if(admin){
            await Admin.create({
                username : username,
                password: crypto.createHash('sha256').update(password).digest('hex'),    
            });
            alert("new admin created");
            console.log("new admin created");
        }
        else{
            await User.create({
                username : username,
                password: crypto.createHash('sha256').update(password).digest('hex'),
            });
            alert("new user created");
            console.log("new user created");
        }
    }
    catch(err){
        console.error("small error in mongodb related to new creation of user: ",err);
    }
}

async function createCourse(username,title,price){
    try{
        const c = await Course.create({
            title : title,
            price : price
        });
    
        await Admin.updateOne({
            username: username
        },{
            $push:{uploadedCourses : c._id}
        });
    }
    catch(err){
        console.error("small error in course creation :",err);
    }
}

async function viewCourses(){
    try{
       const courses = await Course.find();
       return courses;
    }catch(err){
        console.error("some errror while loading cousrses :",err);
    }
}

async function purchaseCourse(username,course_id){
    try{
        await User.updateOne({
            username:username
        },{
            $push:{purchasedCourses:course_id}
        });
    }
    catch(err){
        console.error("error while adding course : ", err);
    }
}

module.exports = {addUser , createCourse , viewCourses , purchaseCourse};