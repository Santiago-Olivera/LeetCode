/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        //p1 is the promise we want to return if it resolves before the time limit
        var p1 = fn(...args);
        //p2 is the promise we want to return if it rejects before the time limit
        var p2 = new Promise((resolve,reject) => {
            setTimeout(()=>{
                reject("Time Limit Exceeded");
            },t)
        })
        //we return the promise that resolves or rejects first
        return Promise.race([p1, p2]);
        }
        
    
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */