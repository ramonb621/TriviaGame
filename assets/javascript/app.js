$(document).ready(function(){
    

let currentQuestion;

let random;

let answersChoice;

// TIMER CODE //
let time = 0;

let intervalId;

let clockRunning = false;

function reset(){
    time = 10;
    $("#time-remaining").text("10")
}
window.onload = function() {
    $("#time-remaining").text("10")
        intervalId = setInterval(time, 1000);
        clockRunning = true;
    
    }

})