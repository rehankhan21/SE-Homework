let string = "racecar";
let tmpstring = string;
let reverse = "";

for(let i = tmpstring.length - 1; i >= 0; i--) {

    reverse += tmpstring[i];
}

if(reverse == string) {
    console.log(reverse + " is a palindrome")
}
else {
    console.log(string + " is not a palindrome")
}

