let num = 15;
let flag = true;

for (let counter = 2; counter < num; counter++) {

    if (num % counter == 0) {
        flag = false;
        break;
    }
}

if (flag == true) {
    console.log("this is a prime number")
}
else {
    console.log("this is not a prime number")
}