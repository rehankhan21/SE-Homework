for (let counter = 0; counter <= 10000; counter++) {

    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    console.log(hours + ":" + mins + ":" + secs);
}

console.log("------------------");

let counter = 0;

while (counter <= 100) {

    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    console.log(hours + ":" + mins + ":" + secs);

    counter++;
}

