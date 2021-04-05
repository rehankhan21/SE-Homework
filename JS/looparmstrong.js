let armnum = 153;
let armtest = armnum;
let singlenum = 0;
let total = 0;

while(armtest != 0){

     singlenum = armtest % 10;
     armtest = Math.trunc(armtest / 10);

     total += Math.pow(singlenum, 3);

}

if (total == armnum) {
    console.log(armnum + " is an armstrong number")
}
else {
    console.log(armnum + " is not an armstrong numbner")
}