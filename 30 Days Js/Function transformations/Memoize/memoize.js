/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    //object to store the arguments(keys) and the results(fn(keys)) of the function
    var passed = {};
    //variable to store the arguments as a string
    var stringArgs;
    return function(...args) {
        //convert the arguments to a string
        //args is an array of arguments, while ...args is a spread operator 
        //that converts the array to a list of arguments
        stringArgs = JSON.stringify(args); 
        //if the arguments are not in the object then store the 
        //arguments and the results of the function
        if(!(stringArgs in passed)){
          passed[stringArgs] = fn(...args);
        }
        return passed[stringArgs];      
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */