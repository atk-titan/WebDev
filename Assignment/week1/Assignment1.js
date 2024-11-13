/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(word1,word2){
    if(word1.length()!==word2.length()){
        return false;
    }

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    let arr1 = word1.split("").sort()
    let arr2 = word2.split("").sort();
  
    function check(arr1, arr2){
      for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
          return false;
        }
      }
      return true;
    }
  
    let ans = check(arr1, arr2);
    return ans;
}
