const mongoose = require("mongoose");
const crypto = require('crypto');

mongoose.connect("mongodbURL")
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
            console.log("new admin created");
        }
        else{
            await User.create({
                username : username,
                password: crypto.createHash('sha256').update(password).digest('hex'),
            });
            console.log("new user created");
        }
    }
    catch(err){
        console.error("small error in mongodb related to new creation of user: ",err);
    }
}

async function createCourse(username,title,price){
    try{
        const admin = await Admin.findOne({
            username:username
        })

        if(!admin){
            throw new Error(`Admin with username "${username}" not found.`);
        }
        
        const c = await Course.create({
            title : title,
            price : price
        });
    
        await Admin.updateOne({
            username: username
        },{
            $push:{uploadedCourses : c._id}
        });

        return c;
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

async function getPurchasedCourse(username) {
    try {
        // Find the user and get their purchasedCourses array
        const user = await User.findOne({ username: username });

        if (!user) {
            throw new Error(`User with username "${username}" not found.`);
        }

        // Use the purchasedCourses array to fetch the corresponding courses
        const courses = await Course.find({ _id: { $in: user.purchasedCourses } });

        return courses;
    } catch (err) {
        console.error("Error while fetching the purchased courses:", err);
        throw err; // Propagate the error for further handling
    }
}

module.exports = {addUser , createCourse , viewCourses , purchaseCourse , getPurchasedCourse};