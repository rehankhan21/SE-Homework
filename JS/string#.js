let maxRows = 6;
//let maxCols = 4;

for (let rows = 0; rows < maxRows  ; rows++) {

        //process.stdout.write("#");

        for (let cols = 0; cols <= rows; cols++) {

            process.stdout.write("#");
            
        }

        console.log()
}

console.log("--------------------------")


for (let rows = maxRows; rows > 0; rows--) {

    //process.stdout.write("#");

    for (let cols = 0; cols < rows; cols++) {

        process.stdout.write("#");
    }

    console.log();
}