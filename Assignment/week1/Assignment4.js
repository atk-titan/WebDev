/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
    
  To Run file -> PS C:\Users\chand\Desktop\100xdevs_2.0\0-1\week1\assignments\mediun> npx jest ./tests/countVowels.test.js
*/

function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let cnt=0;
    str = str.toLowerCase();

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            cnt++;
        }
    }
    return cnt;
}