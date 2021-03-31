var month = 1;
var monthName = "";
var day = 7;
var dayName = "";

if(month == 1){
    monthName = "januray"
}
else if(month == 2){
    monthName = "Feburary"
}
else if(month == 3){
    monthName = "March"
}
else if(month == 4){
    monthName = "Apri"
}
else if(month == 5){
    monthName = "May"
}
else if(month == 6){
    monthName = "June"
}
else if(month == 7){
    monthName = "July"
}
else if(month == 8){
    monthName = "August"
}
else if(month == 9){
    monthName = "September"
}
else if(month == 10){
    monthName = "October"
}
else if(month == 11){
    monthName = "November"
}
else if(month == 12){
    monthName = "December"
}
else{
    monthName = "Invalid Month"
}

if(day == 1){
    dayName = "Sunday"
}
else if (day == 2){
    dayName = "Monday"
}
else if (day == 3) {
    dayName = "Tuesday"
}
else if (day == 4) {
    dayName = "Wenesday"
}
else if (day == 5) {
    dayName = "Thursday"
}
else if (day == 6) {
    dayName = "Friday"
}
else if (day == 7) {
    dayName = "Saturday"
}
else {
    dayName = "Invalid Day"
}

console.log("It is " + monthName + " on " + dayName );