let x = () => {
    console.log(" a call back message")
}

let y = (a, b, callback) => {

    callback();
}


y(1, 2, ()=>console.log("annoynous callback function"))