let array1 = [3, 6, 3];
let array2 = [2, 4, 3];
let array3 = [];

for (let i = 0; i < array1.length; i++) {

    array3.push(array1[i] + array2[i]);
    console.log(array3[i]);
}