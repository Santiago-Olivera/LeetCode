/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    //the array to be return
    const returnedArray = []; 
    //we loop through arr
    for(let i=0 ; i < arr.length ; i++){
        /* To each element of arr, we apply the function fn
        to that element, and then push the result to returnedArray */
        returnedArray.push(fn(arr[i],i))
    }
    return  returnedArray; 
};