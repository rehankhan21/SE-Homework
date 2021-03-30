var letter = '5';
var lower = letter.toLowerCase();
var upper = letter.toUpperCase();
//var num =  parseInt(letter);

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log(letter + " is a lowercase vowel");
}
else if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U'){
    console.log(letter + " is a uppercase vowel");
}
else if (letter > 0 && letter < 9) {
    console.log(letter + " is a number");
}
else {
    console.log(letter + " is a consonant");
}