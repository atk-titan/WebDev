// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

let count=0;
function counter(){
    setTimeout(()=>{
        console.log(count);
        count++;
        counter();
    },1000);
}

counter();