/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        //result is a variable to store the accumulated value
        var result=x;
        //traverse the array of functions
        for(let i=0 ; i<functions.length ; i++){
            /* Stores the result of calling the f[n] function from the array
            starting from the last one, passing x as the initial value */
            result = functions[functions.length-1-i](result);
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */