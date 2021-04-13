let numArray = [5,2,6,7,30];
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
    console.log(data + " is located at index " + index)
}
else {
    console.log(data + " is not in the array")
}