let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let mili = date.getMilliseconds();



for (let counter = 0; counter <= 10000; counter++) {

    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    mili = date.getMilliseconds(); 

    console.log(hours + ":" + mins + ":" + secs + ":" + mili);
}

