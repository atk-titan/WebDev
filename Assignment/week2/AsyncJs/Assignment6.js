setInterval(()=>{
    let date = new Date();
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
},1000);
// function clock(){
//     console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
//     setTimeout(()=>{clock();},1000);
// }
// clock();