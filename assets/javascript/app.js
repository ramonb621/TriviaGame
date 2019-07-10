$(document).ready(function(){
  

let currentQuestion = ["What is the most popular energy drink in the world?", "What hit show from the 90's starred a family of 5 with yellow skin and big googly eyes?",];

let random;

let answersChoice;

// TIMER CODE //
let intervalId;

let clockRunning = false;

function reset(){
    time = "10";
    $("#time-remaining").text("10")
}

// setTimeout(timer, 1000 * 10);

function timeStart(){
        intervalId = setInterval(decrement, 1000);
        $("#time-remaining").text(intervalId);
    }

})