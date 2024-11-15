// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let d = "working on this assignments is reallly ammazing";

fs.readFile("./Assignment/week2/AsyncJs/sample.txt",'utf8',(err,data)=>{
    fs.writeFile("./Assignment/week2/AsyncJs/sample.txt",data+"\n\n"+d,'utf8',(err)=>{
        console.log("file has been saved");
    });
});
