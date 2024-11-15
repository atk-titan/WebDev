// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

const fs = require('fs');

fs.readFile("./Assignment/week2/AsyncJs/sample2.txt",'utf8',(err,data)=>{
    
    let cleanedData = data.split(" ").map((word)=>word.trim()).filter((word)=>word!=='').join(" "); // Join with a single space

    console.log("Cleaned Data:", cleanedData);
   
    fs.writeFile("./Assignment/week2/AsyncJs/sample2.txt",cleanedData,'utf8',(err)=>{
        if(err){
            console.log(err);
        }
    });
})