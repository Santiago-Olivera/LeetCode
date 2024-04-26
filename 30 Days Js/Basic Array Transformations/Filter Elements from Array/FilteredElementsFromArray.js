/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    //Declare the filtered Array that will be returned
    const filteredArray = [];
    //Loop through the array arr
    for(let i=0 ; i<arr.length ; i++){
        //if the function fn applied to current element of arr is true..
        if(fn(arr[i],i)){
            //save the element to the filteredArray
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray; 
};