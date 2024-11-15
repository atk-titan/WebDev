/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function PromisifiedSetTimeout(n){
    return new Promise((res,rej)=>{
        setTimeout(res,n*1000);
    })
}

PromisifiedSetTimeout(3).then(function(){console.log("after 3 secs")});