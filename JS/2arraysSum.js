let array1 = [3, 6, 3];
let array2 = [2, 4, 3];
let array3 = [];
let sum = 0;

for (let i = 0; i < array1.length; i++) {

    sum = array1[i] + array2[i]
    array3.push(sum);
    console.log(array3[i]);
}