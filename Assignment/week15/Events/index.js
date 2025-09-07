const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('greet',(username) => {
    console.log(`hello ${username} to events in nodejs`);
});

eventEmitter.on('greet',(username) => {
    console.log(`hi ${username}, Wellcome to events in nodejs`);
});

eventEmitter.once("pushNotification", ()=> {
    console.log("this evnt is only triggered only once.")
})

// event emission
eventEmitter.emit("greet","gaurav");
// eventEmitter.emit("greet","user");
// eventEmitter.emit("greet","new user");

// eventEmitter.emit("pushNotification");
// eventEmitter.emit("pushNotification");

console.log(eventEmitter.listeners("greet"));