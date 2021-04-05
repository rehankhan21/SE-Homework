let num = 1;
let flag = true;

for(let counter = 1; counter <= num; counter++){
    
    if(num / counter == num){
        flag = true;
    }
    else if(num % counter == 0 && counter != num){
        flag = false;
        break;
    }
    else if(num / counter == 1) {
        flag = true;
    }
}

if(flag == true){
    console.log("this is a prime number")
}
else {
    console.log("this is not a prime number")
}