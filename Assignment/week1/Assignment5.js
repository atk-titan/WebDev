/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str){
    if(str.length===0){
        return false;
    }
    
    str=str.toLowerCase();

    let end = str.length;
    for(let i=0 ; i<=end/2 ; i++){
        if(str[i]===str[end+1-i]){
            continue;
        }
        return false;
    }
    return true;
}

console.log(isPalindrome("Non"));