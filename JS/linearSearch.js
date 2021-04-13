//let numArray = [5,2,6,7,30];

function linearSearch(numArray) {

let bool = false;
let data = 7;
let index = 0;

for (let i = 0 ; i < numArray.length; i++) {

    if(numArray[i] == data){
        bool = true;
        index = i;
        break;
    }
}

if(bool == true) {
    return data + " is located at index " + index
}
else {

    return data + " is not in the array"
}

}

function linearSearchMulti(numArray) {

let bool = false;
let data = 7;
let index = [];

for (let i = 0 ; i < numArray.length; i++) {

    if(numArray[i] == data){
        bool = true;
        index.push(i);
    }
}

if(bool == true) {
    return data + " is located at indexs " + index
}
else {
    return data + " is not in the array"
}
}