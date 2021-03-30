var letter = 'I';
var lower = letter.toLowerCase();
var upper = letter.toUpperCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log(letter + " is a lowercase vowel");
}
else if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U'){
    console.log(letter + " is a uppercase vowel");
}
else {
    console.log(letter + " is a consonant");
}