function greet(msg:any){
    console.log("Hello"+msg);
}

greet("world")

function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(10,20));

function runAfter1S(func:()=>void){
    setTimeout(func,1000);
}

runAfter1S(function(){
    console.log("after 1 secs");
    return 10;
});


// assigning types to objects
const user = {
    firstname:"atk",
    lastname:"titan",
    email:"atk@titan.com",
    age:21
}

// function isLegal(user:{
//     firstname:string,
//     lastname:string,
//     email:string,
//     age:number
// }){
//     return user.age>=18?true:false;
// }

interface User {
    firstname:string,
    lastname:string,
    email:string,
    age:number
}
function isLegal(user:User){
    return user.age>=18?true:false;
}

console.log(isLegal(user));

type NumberArr = number[];
let n:NumberArr =[23,34];


type keyInput = "up"|"down"|"right"|"left";

enum direction{
    Up,
    Down,
    Right,
    Left
}
function doSomething(keyPressed:direction){
    if(keyPressed){
        console.log(keyPressed);
    }
}

// doSomething("up");
doSomething(direction.Down);

(function(keyPressed:direction){
    console.log(keyPressed);
})(direction.Up);