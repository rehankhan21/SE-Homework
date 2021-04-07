let inputName = "1User"
let inputPassword = "1password "
let trimName = inputName.trim().toLowerCase();
let trimPassword = inputPassword.trim().toLowerCase();


if (trimName == "user" && trimPassword == "password") {
    console.log("you are loggined in")

    /*  
        prompt works in webpage

        verify email address. then input verification code.
    
        loop a list of items, add buttons thats add items too cart. 
        if(Cart is not empty){
            go to cart for checkout
        }

        in cart 

        if(user is not verified cannot proceed to checkout)
        else(){
            go to checkout, output you have been checked out!!!!
        }
    */
}
else if (trimName != "user" && trimPassword == "password") {
        console.log(trimName
            .padEnd(trimName.length + 1, " ")
            .concat("This is not the correct Username"))

}
else if (trimName == "user" && trimPassword != "password" ) {
    console.log(console.log(
        trimPassword
            .padEnd(trimPassword.length + 1, " ")
            .concat("This is not the correct Password")))
            .replace(trimPassword, "********")
}
else {
    console.log(
        trimName
            .padEnd(trimName + 1, " ")
            .concat(trimPassword)
            .padEnd(trimPassword + 1, " ")
            .concat("are both wrong"));
}

console.log(inputName.repeat(10))