/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr){
    if(arr.length===0){
        return -1;
    }
    let largest=arr[0];
    
    arr.forEach(element => {
        largest=(largest>element)?largest:element;
    });

    return largest;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));
