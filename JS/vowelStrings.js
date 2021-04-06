let string = "Hellov";
let vowels = "";
let numOfVowels = 0;

for (let i = 0; i < string.length; i++) {

    let v = string[i];

    if(v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u'  ) {
        console.log(vowels.concat(v));
        numOfVowels++;
    }
}

console.log(numOfVowels);
