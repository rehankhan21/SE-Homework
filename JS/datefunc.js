var date = new Date();
//date.getMinutes()
var hour = date.getHours();

if(hour < 12) {
    console.log("Good Morning");
}
else if (hour >= 12 && hour <= 16) {
    console.log("Good Afternoon");
}
else {
    console.log("Hello, how are you?");
}