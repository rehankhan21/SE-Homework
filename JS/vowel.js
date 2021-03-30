//var name = prompt("enter your name : ");
var letter = '8';
//var lower = letter.toLowerCase();
var upper = letter.toUpperCase();
var num =  parseInt(letter);

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log(letter + " is a lowercase vowel");
}
else if (upper == 'A' || upper == 'E' || upper == 'I' || upper == 'O' || upper == 'U'){
    console.log(letter + " is a uppercase vowel");
}
else if (num >= 0 && num <= 9) {
    console.log(letter + " is a number");
}
else {
    console.log(letter + " is a consonant");
}

console.log('5' == 5);
