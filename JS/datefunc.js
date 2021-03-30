var date = new Date();

var hour = date.getHours();
var min = date.getMinutes()
var sec = date.getSeconds();

if(hour < 12) {
    console.log("Good Morning");
    console.log(hour + ":" + min + ":" + sec);
}
else if (hour >= 12 && hour <= 16) {
    console.log("Good Afternoon");
}
else {
    console.log("Hello, how are you?");
   
}