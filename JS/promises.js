/* Promise is an object, with its own properties and methods.
    
    runs a function that is asynchrous code, starts its own thread to get a result.

    keeps track of asynchrous code, checks to see if that asynchrous code has resolved or if it failed.
    connection to database passed or failed, or if fetching api data passed or failed.

    Promise is a built in class in javascript
*/


// you have to use resolve and reject as keywords, resolve and reject are callback methods
let p = new Promise((resolve, reject) => {


    let sum = 1 + 3;
    if (sum == 4) {
        resolve(sum);
    }
    else {
        reject("failed");
    }
})

// with promise object, you can use its then methods, when a promise resolves then u you excute then method and you pass the value from the resolve.
// catch method is used when ur promise is rejected.
p.then((value) => {
    console.log("success..... " + value);
    return value;
}).then((value) => {

    if (value % 2 == 0)
        console.log(value + " is an even number");
    else
        console.log(value + " is an odd number");
}).catch((value) => {
    console.log("printing result withn 'catch'... " + value);
})