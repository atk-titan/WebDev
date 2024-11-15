/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

const srt = Date.now();
afterT1(1).then(()=>afterT2(3))
          .then(()=>afterT3(5))
          .then(()=>{
            console.log((Date.now()-srt)/1000)
        });