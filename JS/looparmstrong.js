let armnum = 123;
let armtest = armnum;
let singlenum = 0;
let total = 0;

 for(let i = 1; i <= 3; i++) {

    singlenum = armtest % 10;
    armtest = Math.trunc(armtest / 10);

     total += Math.pow(singlenum, 3);  
}

if(total == armnum){
    console.log(armnum + " is an armstrong number")
}
else{
    console.log(armnum + " is not an armstrong numbner")
}