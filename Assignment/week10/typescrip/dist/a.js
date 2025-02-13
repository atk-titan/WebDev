"use strict";
function greet(msg) {
    console.log("Hello" + msg);
}
greet("world");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
function runAfter1S(func) {
    setTimeout(func, 1000);
}
runAfter1S(function () {
    console.log("after 1 secs");
    return 10;
});
// assigning types to objects
const user = {
    firstname: "atk",
    lastname: "titan",
    email: "atk@titan.com",
    age: 21
};
function isLegal(user) {
    return user.age >= 18 ? true : false;
}
console.log(isLegal(user));
let n = [23, 34];
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Down"] = 1] = "Down";
    direction[direction["Right"] = 2] = "Right";
    direction[direction["Left"] = 3] = "Left";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    if (keyPressed) {
        console.log(keyPressed);
    }
}
// doSomething("up");
doSomething(direction.Down);
(function (keyPressed) {
    console.log(keyPressed);
})(direction.Up);
