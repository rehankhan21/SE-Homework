// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
let limit;
let limitmin;
let limitsec;
let temp;

function documentLoaded() {
    "use strict";

    // listen for mouse clicks on the button

    document.getElementById("btnStart").addEventListener("click", buttonClicked, false);
    document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);
    //let test = document.getElementsByClassName("editable-in-place")[4].addEventListener("click", clicked);

    console.log("Document Change");
    //console.log(test);

}

/* when we click on the button, we save the current time, and the time limit. We then 
    create a timer to execute the "updateTime" function once a second.

*/

function buttonClicked() {
    "use strict";

    startTime = new Date();

    limit = parseInt(document.getElementById("txtTempo").value);
    console.log(limit);

    clearInterval(temp);
    temp = setInterval(updateTime, 1000);
}

function updateTime() {
    "use strict";

    //read the current time
    var currentTime = new Date();

    // calculate how many seconds passed since the start of the timer
    var elasped = (currentTime.getTime() - startTime.getTime()) / 1000;

    // convert seconds to minutes and seconds (below 60)
    var minutes = Math.floor(elasped / 60);
    var seconds = Math.floor(elasped % 60);

    // pad with zeroes on the left to look better
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    //show the elapsed time
    document.getElementById("clock").innerHTML = minutes + ":" + seconds;

    // check if we are above the time limit and set the color of the timer accordingly
    if (minutes >= limitmin && seconds >= limitsec ) {

        document.getElementById("clock").className = "red";
        document.getElementById("changeColor").classList.remove("blue")
        document.getElementById("changeColor").classList.add("red")
    }
    else {

        document.getElementById("clock").className = "blue";
        document.getElementById("changeColor").classList.remove("red")
        document.getElementById("changeColor").classList.add("blue")
    }

}

function clicked(evt) {
    // get the <input> and check if it is hidden
    var input = this.querySelectorAll("input");
    var label = this.querySelectorAll("div");
    // var inputmin = document.getElementById("mins");
    // var labelmin = this.querySelector("div");

    // var inputsec = document.getElementById("secs");
    // var labelsec = this.querySelector("div");
    clearInterval(temp);
    console.log(input);
    console.log(label);


    if (evt.target === input[0] || evt.target === input[1]) {
        // if user clicked on <input> do nothing, he is editing

    } else if (evt.target === label[0] || evt.target === label[1] ) {
        // <input> was hidden, make it visible
        // input.forEach(element => {
        //     element.classList.remove("hide");
        // });

        for (let i = 0; i < input.length; i++) {
            var test = input[i];
            test.classList.remove("hide");
            console.log(test);
        }

        for (let i = 0; i < label.length; i++) {
            var testL = label[i];
            testL.classList.add("hide");
        }



        //input.classList.remove("hide");
        // input.className("sec").classList.remove("hide");

        //  and hide the label
        //label.classList.add("hide");
        // label.className("clock").classList.add("hide");

        // fill the <input> with the text from the label
        //input.value = label.innerHTML;

        // listens for the "ENTER" to be pressed

        input[0].addEventListener("keydown", function keydown(evt) {

            // 13 is the code for ENTER
            if (evt.keyCode === 13) {
                //label.innerHTML = input.value;
               // input.className("sec").focus();

                startTime = new Date();
                var min = parseInt(input[0].value)
                limitmin = min;
                //clearInterval(temp);
                //temp = setInterval(updateTime, 1000);

                // label.classList.remove("hide");
                // input.classList.add("hide");


                // its important to remove the keydown listener, otherwise in a subsequent edit
                // we will end up with several keydown listeners running
                input[0].removeEventListener("keydown", keydown);
                input[1].focus();
            }

        });

        input[1].addEventListener("keydown", function keydown(evt) {

            // 13 is the code for ENTER
            if (evt.keyCode === 13) {
                //label.innerHTML = input.value;
               // input.className("sec").focus();

                startTime = new Date();
                var sec = parseInt(input[1].value)
                console.log(sec);
                limitsec = sec;
                clearInterval(temp);
                temp = setInterval(updateTime, 1000);

                //label.classList.remove("hide");
                for(let i = 0; i < label.length; i++) {
                    label[i].classList.remove("hide");
                    input[i].classList.add("hide");
                }

                //input.classList.add("hide");


                // its important to remove the keydown listener, otherwise in a subsequent edit
                // we will end up with several keydown listeners running
                input[1].removeEventListener("keydown", keydown);
            }

        });
        //input.focus();

    } else {
        // <input> was visible, hide it without modifying the value
        //input.classList.add("hide");

        for (let i = 0; i < input.length; i++) {
            var test = input[i];
            test.classList.add("hide");
        }


        // show the label
        //label.classList.remove("hide");

        for(let i = 0; i < label.length; i++) {
            var testL = label[i];
            testL.classList.remove("hide");
        } 
    }

}

