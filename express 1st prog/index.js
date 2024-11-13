const express = require("express");
const app = express();
//middlewares
app.use(express.json());

const port = 3000;

var users = [{
    name: "john",
    kidneys: [{
        health:true
    }]
}];

let displayKidneys = () =>{
    return users[0].kidneys.map((kidney,ind)=>{
       return `Kidney ${ind + 1}: Health is ${kidney.health}`
    }).join("<br>");
};

app.get("/",(req,res)=>{
    let kidInfo = displayKidneys();
    res.send(`the ${users[0].name} has ${users[0].kidneys.length} kidneys.<br><br>The health for kidneys is as<br>`+kidInfo);
});

app.post("/",(req,res)=>{
    console.log(req.body);
    let a={
        health:req.body.isHealthy==="true"
    };
    users[0].kidneys.push(a);
    res.send("<br>kidney added")
});

app.put("/",(req,res)=>{
    let i=parseInt(req.query.ind);
    // users[0].kidneys.map((kidney,ind)=>{
    //     if(ind===i){
    //         kidney.health=true;
    //     }
    //     return kidney;
    // })
    users[0].kidneys[i-1].health = true;
    res.send("<br>kidney updated")
});

app.delete("/",(req,res)=>{
    let i=parseInt(req.query.ind);
    // users[0].kidneys.filter((kidney,ind)=>ind!==i);
    users[0].kidneys.splice(i, 1);
    res.send("<br>kidney deleted")
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});