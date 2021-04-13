function printMessage() {

    return "my first function"
}

function findSum() {

    return 10 + 12;
}

function findProduct(a, b) {

    return a * b;
}

function findEven(a) {

    //let bool = false;

    if(a % 2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

function totalParam() {
    
    console.log( arguments.length);
}

totalParam(1,2,3)

function reverseString(a) {
    let newStr = "";
    for(let i = (a.length-1); i >= 0; i--) {

        newStr += a[i];
        console.log(newStr)
    }

    return newStr;
}