/**
 * @param {number} millis
 * @return {Promise}
 */
/* Explanation : 
async function, is used to define an asynchronous function that returns a promise.
eventhough the async returns a promise , its necessary in this case to define the 
return type as Promise to be able to make the resolve wait for the setTimeout to finish.
otherwise the setTimeout will be set, but it will not wait for the time to finish.
*/
async function sleep(millis) {
    return new Promise((resolve) => {
     setTimeout(() => {
         resolve(millis);
     },millis)
    })
 }
 
 /** 
  * let t = Date.now()
  * sleep(100).then(() => console.log(Date.now() - t)) // 100
  */