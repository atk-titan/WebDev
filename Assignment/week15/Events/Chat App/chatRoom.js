const EventEmitter = require("node:events");

class ChatRoom extends EventEmitter{
    constructor(){
        super();
        this.users = new Set();
    }

    join(user){
        this.users.add(user);
        this.emit('join', user);
    }

    sendMessage(user,message){
        if(this.users.has(user)){
            this.emit("message",user, message);
        }else{
            console.log(`the ${user} is not part of the chat.`);
        }
    }

    leave(user){
        if(this.users.has(user)){
            this.users.delete(user);
            this.emit("leave",user);
        }else{
            console.log(`the ${user} is not the part of the chat.`)
        }
    }
}

module.exports = ChatRoom;