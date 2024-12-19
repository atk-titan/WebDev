const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gmane8451:UIWBU3boNS4FIvBm@cluster0.feaga.mongodb.net/Todos")
    .then(()=>console.log("mongoDb connection successful"))
    .catch((err)=>console.log("connection error occured"+"/t connot connect with MongoDB : ",err))

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: false,
    },
    completed:{
        type:Boolean,
        required: true,
    }
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {todo};