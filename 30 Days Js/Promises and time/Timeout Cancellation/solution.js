/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

/* Explanation : 
we return a function because, if we make something like this :
cancelTimeOut = cancellable(fn, args, t);
we can controll the timeOut by calling cancelTimeOut();
as it returns a function, the function to clearTime out would only be called
if we call cancelTimeOut();
In other words, we ensure that timeOut is set, but is only cleared if we call the function. 
*/
var cancellable = function(fn, args, t) {
    var timeOut = setTimeout(() => {
     fn(...args);
    },t);
 
     return function(){
         clearTimeout(timeOut);
     }
 };
 
 /**
  *  const result = [];
  *
  *  const fn = (x) => x * 5;
  *  const args = [2], t = 20, cancelTimeMs = 50;
  *
  *  const start = performance.now();
  *
  *  const log = (...argsArr) => {
  *      const diff = Math.floor(performance.now() - start);
  *      result.push({"time": diff, "returned": fn(...argsArr)});
  *  }
  *       
  *  const cancel = cancellable(log, args, t);
  *
  *  const maxT = Math.max(t, cancelTimeMs);
  *           
  *  setTimeout(cancel, cancelTimeMs);
  *
  *  setTimeout(() => {
  *      console.log(result); // [{"time":20,"returned":10}]
  *  }, maxT + 15)
  */