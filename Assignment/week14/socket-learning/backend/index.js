import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const port = 3000;
const app = express();

const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:[ "GET" , "POST" ],
        credentials: true
    }
});

io.on('connection',(socket)=>{
    console.log("user connected");
    // console.log(socket);
    console.log("id: ",socket.id);
    // socket.emit('welcome',`welcome to the chat: ${socket.id}`);
    socket.broadcast.emit('welcome',`welcome to the chat: ${socket.id}`); // this can be done to notufy the group whenever a new user jois the server

    socket.on('message',(data)=>{
        console.log(data);
        socket.broadcast.emit('recieve-message',data); // Everyone recieves the messages but not the sender
    });

    socket.on("message",({room_id, msg}) => {
        socket.to(room_id).emit("msg",msg);
    });

    socket.on('disconnect',()=>{
        console.log(`user disconnected`,socket.id);
    });
});

app.use(cors());

app.get('/',(req,res)=>{
    return res.send('<h1>Hello from server</h1>');
});

server.listen(port,()=>{
    console.log(`server running at localhost:3000`);
})