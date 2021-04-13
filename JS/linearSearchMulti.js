let numArray = [5,2,6,7,30, 7];
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
    console.log(data + " is located at indexs " + index)
}
else {
    console.log(data + " is not in the array")
}