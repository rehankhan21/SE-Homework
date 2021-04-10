// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limit;
let temp;

function documentLoaded() {
    "use strict";

    // listen for mouse clicks on the button

    document.getElementById("btnStart").addEventListener("click", buttonClicked, false);
    document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);

    console.log("Document Change");

}

/* when we click on the button, we save the current time, and the time limit. We then 
    create a timer to execute the "updateTime" function once a second.

*/

function buttonClicked() {
    "use strict";

    startTime = new Date();

    limit = parseInt(document.getElementById("txtTempo").value);

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
    if (minutes >= limit) {

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
    //var inputmin = this.querySelector("input");
    var inputmin = document.getElementById("mins");
    var inputsecs = document.getElementById("secs");
    var labelmin = this.querySelector("div");
    clearInterval(temp);

    if (evt.target === inputmin) {
        // if user clicked on <input> do nothing, he is editing

    } else if (evt.target === labelmin) {
        // <input> was hidden, make it visible
        inputmin.classList.remove("hide");

        // and hide the label
        labelmin.classList.add("hide");

        // fill the <input> with the text from the label
        //input.value = label.innerHTML;

        // listens for the "ENTER" to be pressed
        inputmin.addEventListener("keydown", function keydown(evt) {

            // 13 is the code for ENTER
            if (evt.keyCode === 13) {
                //label.innerHTML = input.value;
                startTime = new Date();
                limit = inputmin.value;
                clearInterval(temp);
                temp = setInterval(updateTime, 1000);

                labelmin.classList.remove("hide");
                inputmin.classList.add("hide");


                // its important to remove the keydown listener, otherwise in a subsequent edit
                // we will end up with several keydown listeners running
                inputmin.removeEventListener("keydown", keydown);
            }

        });
        inputmin.focus();
        inputsecs.focus();
    } else {
        // <input> was visible, hide it without modifying the value
        inputmin.classList.add("hide");

        // show the label
        labelmin.classList.remove("hide");
    }

}

