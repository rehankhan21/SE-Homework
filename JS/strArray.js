/* Array methods

    converting strings to an array
    var days = "mondya,tues,wed"

    splits the string up but is still only 1 element in the array.
    //daysarray = days.split(",")
    //daysarray = days.split()

    converting an array into a string
    //array.join("--") uses a delimiter, seperates the string elements with the delimiter
    //array.toString()
*/

let array = ["mon", "tues", "wed", "thurs", "friday"];

let strArray = array.join("--")
let strArray2 = array.join();

let string = "bob john hop"


let arrayStr = string.split(" ")
let arrayStr2 = string.split()
let arrayStr4 = array.toString();

// this parses each strings character as a seperate element
let arrayStr3 = string.split("") 

// document.getElementById("para1").innerHTML = strArray;

// document.getElementById("para2").innerHTML = array;

console.log(strArray);
console.log(arrayStr)