//let array = ['r','a','c','e','c','a','r'];
//let array = [3, 6 ,3];
let array = ['s','m','i','t','h']
let revArray = [];
let flag = true;
let displayString = ""

for (let i = 0; i < array.length; i++) {

    displayString += array[i];
    revArray.push(array[(array.length - i) -1]);
}

for (let i = 0; i < array.length; i++) {

    if(revArray[i] != array[i]){
        flag = false;
        break;
    }
}


if (flag == false) {
    console.log(displayString + " is not a palindrome")
}
else {
    console.log(displayString + " is a palindrome")
}

