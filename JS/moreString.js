let str = " I like hot coffee hot  "
let strPadStart = "padding in the start"
let strPadEnd = "padding in the end"
let newline = "first line \nnew line"

console.log(str.trim());

let str2 = str.replace("hot", "cold")
//let str3 = str.replaceAll("hot","cold")
let str4 = str.replace(/hot/g, "cold")

/*
    padStart() adds padding b4 string
    padEnd()
*/
console.log(str2)

console.log(str4)

console.log(strPadStart.padStart(40, " "))
console.log(strPadEnd.padEnd(40, 1))

console.log(newline);

console.log('\n');

let strConcat = strPadStart
    .padEnd(strPadStart.length + 1, " ")
    .concat(strPadEnd)
    .replace(/padding/g, "coffee")
    .concat(".")
    .toUpperCase()

console.log(strConcat);
console.log(strConcat.includes("Coffee"));
console.log(strConcat.startsWith("COFFEE"))
console.log(strConcat.endsWith("END"))