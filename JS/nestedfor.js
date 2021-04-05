//let value = "*";
let userRow = 7;
let userCol = 8;

for (let row = 1; row <= userRow; row++) {

    for(let column = 1; column <= userCol; column++) {
        //console.log(value++);
        //process.stdout.write(value.toString() + " ");
        //value++;
        let tmp = row + "," + column;
        process.stdout.write(tmp.toString() + " ");
    }

    console.log();
}