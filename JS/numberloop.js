let rowNum = 5;

for (let row = 1; row <= rowNum; row++ ) {

    for (let col = 5; col >= row; col--){
        //console.log(row);
        process.stdout.write(col.toString()); 
    }
    console.log();
}
