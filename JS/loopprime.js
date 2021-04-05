let num = 15;
let flag = true;

for(let range = 2; range <= num; range++){
    
    for(let counter = 1; counter <= range; counter++){

        if (range / counter == range ||  range / counter == 1){
            flag = true;
        }
        else if(range % counter == 0 && range != counter){
            flag = false;
            break;
        }

    }

    if(flag == true){
        console.log(range + ", ")
    }
}