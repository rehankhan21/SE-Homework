let string = "John Smith";

console.log(string);

let fname = "John ";
let lname = "Smith S";
let fullname = fname.concat(lname);

let stringnum = "34521";

console.log(fname.concat(lname));

console.log(fname.toUpperCase(), lname.toLowerCase());

console.log(fname.indexOf(' '));

console.log("t is at index " + lname.indexOf("t"), "S last index is " + lname.lastIndexOf("S"));

for(let i = 0; i < fullname.length; i++) {

    console.log(fullname.charAt(i));

}

console.log(fullname.indexOf("t"));

console.log(fullname.slice(0,3))