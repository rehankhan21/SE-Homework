var grade = 80;

if (grade > 90) {
    console.log("A");
}
else if (grade >= 80 && grade < 90) {
    console.log("B");
}
else if (grade >= 70 && grade < 80) {
    console.log("C");
} 
else if (grade >= 60 && grade < 70){
    console.log("D");
}
else if (grade < 60) {
    console.log("F");
}
else {
    console.log("not a valid input");
}