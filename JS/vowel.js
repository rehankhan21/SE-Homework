//var name = prompt("enter your name : ");
var v = '8';
//var lower = letter.toLowerCase();
var upper = v.toUpperCase();
var num =  parseInt(v);

if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u') {
    console.log(v + " is a lowercase vowel");
}
else if (upper == 'A' || upper == 'E' || upper == 'I' || upper == 'O' || upper == 'U'){
    console.log(v + " is a uppercase vowel");
}
else if (num >= 0 && num <= 9) {
    console.log(v + " is a number");
}
else {
    console.log(v + " is a consonant");
}

console.log('5' == 5);
