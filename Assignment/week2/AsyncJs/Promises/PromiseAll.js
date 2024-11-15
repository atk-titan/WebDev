/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function afterT1(t1){
    return new Promise((res,rej)=>{
        setTimeout(res,t1*1000);
    });
}

function afterT2(t2){
    return new Promise((res,rej)=>{
        setTimeout(res,t2*1000);
    });
}

function afterT3(t3){
    return new Promise((res,rej)=>{
        setTimeout(res,t3*1000);
    });
}

function threeFunction(){
    return Promise.all([afterT1(1),afterT2(3),afterT3(5)]);
}

let srt = Date.now();
console.log(srt);
threeFunction().then(()=>{console.log((Date.now()-srt)/1000)});