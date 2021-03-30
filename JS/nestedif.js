var grade = 80;

if(grade > 60){
    if(grade >= 90 && grade <= 100) {
        console.log(" you are a top student");
    }
    else{
        console.log(" almost to the top keeping going!!!");
    }
}
else if (grade >= 0 && grade < 60){

       if(grade > 50 && grade <= 60) {
          console.log(" you have to try alittle harder"); 
       } 
       else {
           console.log("you have to try ALOT harder")
       }
}
else {
    console.log("not valid grade");
}