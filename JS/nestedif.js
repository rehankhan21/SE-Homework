var grade = -1;

if(grade > 60){

    if(grade >= 90) {
        console.log(" you are a top student");
    }
    else{
        console.log(" almost to the top keep going!!!");
    }
}
else if (grade >= 0 && grade <= 60){

       if(grade > 50) {
          console.log(" you have to try alittle harder"); 
       } 
       else {
           console.log(" you have to try ALOT harder")
       }
}
else {
    console.log("not valid grade");
}