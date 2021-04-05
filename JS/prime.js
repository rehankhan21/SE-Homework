let num = 15;
let flag = true;

for(let counter = 1; counter <= num; counter++){
    
        if(num == 1){
            flag = false;
            break;
        }
        else if (num / counter == num || num / counter == 1){
            flag = true;
        }
        else if(num % counter == 0 && counter != num){
            flag = false;
            break;
        }

        // if(num / counter == num || num / counter == 1){
        //     flag = true;
        // }
        // else if (num == 1){
        //     flag = false;
        //     break;
        // }
        // else if(num % counter == 1 && counter != num){
        //     flag = false;
        //     break;
        // }
}

if(flag == true){
    console.log("this is a prime number")
}
else {
    console.log("this is not a prime number")
}