let start = 30;
let end = 5;
let counter = 0;

for( counter = start; counter >= end; counter--) {

    if((counter % 2) == 0){
        console.log(counter + " is an even number");
    }
}

console.log("------------------")

counter = start;

while(counter >= end) {

    if((counter % 2) == 0){
        console.log(counter + " is an even number");
    }

    counter--;
}
