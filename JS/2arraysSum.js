let array1 = [];
let array2 = [];
let array3 = [];
let sum = 0;

for (let i = 0; i < 5; i++) {

    array1.push(i + 1);
    array2.push(i * 2);
    sum = array1[i] + array2[i]
    array3.push(sum);
    console.log(array3[i]);
}