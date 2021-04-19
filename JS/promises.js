/* Promise is an object, with its own properties and methods.
    
    runs a function that is asynchrous code, starts its own thread to get a result.

    keeps track of asynchrous code, checks to see if that asynchrous code has resolved or if it failed.
    connection to database passed or failed, or if fetching api data passed or failed.

    Promise is a built in class in javascript
*/


// you have to use resolve and reject as keywords, resolve and reject are callback methods
let p = new Promise((resolve, reject) => {


    let arr = [3,1,56,21,34,2];
    // let arr = [];
    if (arr.length != 0) {
        resolve(arr);
    }
    else {
        reject("Array is empty");
    }
})

// with promise object, you can use its then methods, when a promise resolves then u you excute then method and you pass the value from the resolve.
// catch method is used when ur promise is rejected.
//then method and catch method both take functions as arguments
p.then((value) => {
    console.log("success..... " + value);
    // return value;
    // chain promises then method

    //bubbleSort
    for(let i = 0; i < value.length; i++) {

        for(let j = 0; j < value.length - i - 1; j++) {

            if(value[j] > value[j+1]){
                let tmp = value[j];
                value[j] = value[j + 1];
                value[j + 1] = tmp;
            }
        }
    }

    console.log("Sorted Array " + value);
    return value;
}).then((value) => {

    //binarySearch Recurr
    let binarySearch = (array, left, right, x) => {

        let mid = Math.floor(right - left)

        if(right >= left) {

            if(x == array[mid]) {
                return x + " found at index " + mid;
            }
            else if(x > array[mid]) {
                return binarySearch(array, mid + 1, right, x)
            }
            else if(x < array[mid]) {
                return binarySearch(array, left, mid - 1, x)
            }
        }

        return "number not found";
    }

    console.log(binarySearch(value, 0, value.length - 1, 34))
    
}).catch((value) => {
    console.log("printing result withn 'catch'... " + value);
})