/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    //In this case, val is going the be the accumulator 
    //Init is the value from which we want to start the accumulation
    var val=init; 
    for(let i=0; i<nums.length; i++){
        //Update val, with the result of applying fn to the previous result and the current value of nums
        val = fn(val,nums[i]);
    };
    //returned the accumulated value
    return val;
};