let end = 10;
let curr = 1;
let total = 0;
let prev = 0;

for(let i = 1; i <= end; i++) {

    if(i == 1){
        process.stdout.write("0 " + "1 ");
    }

    total = prev + curr;
    prev = curr;
    curr = total;
    process.stdout.write( total + " ");

}