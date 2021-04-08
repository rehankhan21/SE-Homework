let array = [];
let sum = 0;

let numS = "123"

for (let i = 1; i <= 10; i++) {

    array.push(i*2);
}

for (let i = 0; i < array.length; i++) {

    console.log(array[i])
    sum += array[i];
}

console.log(numS[1])
console.log("Sum of array elements = " + sum);