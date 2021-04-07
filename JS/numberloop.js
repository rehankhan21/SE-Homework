for (let row = 5; row >= 1; row-- ) {

    for (let col = 1; col <= row; col++){
        //console.log(row);
        process.stdout.write(col.toString()); 
    }
    console.log();
}
