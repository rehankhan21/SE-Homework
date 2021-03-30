var grade = 80;

if(grade > 60){
    if(grade >= 90 && grade <= 100) {
        console.log(" you are a top student");
    }
    else{
        console.log(" almost there keeping going!!!");
    }
}
else if (grade >= 0 && grade < 60){

        console.log(" you have to try harder");
}
else {
    console.log("not valid grade");
}