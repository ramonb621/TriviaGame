$(document).ready(function(){
    
window.onload = function() {
    $("#time-remaining").text("10")
    };

let currentQuestion;

let random;

let answersChoice;

// TIMER CODE //
let time = 0;

let intervalId;

let clockRunning = false;

function reset(){
    time = 0;
    $("#time-remaining").text("10")
}
})