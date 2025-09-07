const ChatRoom = require('./chatRoom.js');

const chat = new ChatRoom();

chat.on("join",(user)=>{
    console.log(`${user} has joined the room.`);
});

chat.on("message",(user, message)=>{
    console.log(`${user} : ${message} `);
});

chat.on("leave",(user)=>{
    console.log(`${user} has left the room.`);
});

// simulation
chat.join("Alice");
chat.join("bob");

chat.sendMessage("Alice","How are you?");
chat.sendMessage("bob","Fine!, How are you?");

chat.sendMessage("Alice","Fine!");

chat.leave("Alice");
chat.sendMessage("bob","This cant be sent");
chat.leave("bob");