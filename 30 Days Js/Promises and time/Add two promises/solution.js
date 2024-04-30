/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
/* Explanation : 
async function, is used to define an asynchronous function that returns a promise.
await is used to wait for a promise to resolve or reject.
so by using async and await we can wait for the promises to resolve and then add them.
in other words is a way to make the code look synchronous but it is still asynchronous.
async and await work together to make the code look synchronous but it is still asynchronous.

promise1 and promise2 are promises defined behind the scenes by leetcode. 
*/
var addTwoPromises = async function(promise1, promise2) {
    const p1 = await promise1;
    const p2 = await promise2;
    return p1+p2 ; 
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */