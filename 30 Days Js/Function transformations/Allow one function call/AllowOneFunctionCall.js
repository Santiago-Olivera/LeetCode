/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    //varible to check if the function is executed or not
    var executed = false; 
    //function with rest operator to take any number of arguments
    return function(...args){
        //if the function is not executed then execute the function
        if(!executed){
            executed = true; 
            return fn(...args);
        }
    
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
