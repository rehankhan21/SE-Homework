for(let counter = 1; counter <= 50; counter++){
    if(counter % 3 == 0 && counter % 5 == 0){
        console.log(counter + " fizzbuzz")
    }
    else if(counter % 5 == 0){
        console.log(counter + " buzz")
    }
    else if (counter % 3 == 0) {
        console.log(counter + " fizz");
    }
}