$(document).ready(function(){
  

let currentQuestion = ["What is the most popular energy drink in the world?", "What hit show from the 90's starred a family of 5 with yellow skin and big googly eyes?", "Which actor starred as \'Dalton\' in 1989's hit \"Road House\"?", "Which artist is known for realeasing hit song \"What's luv?\" in 2001 which featured Ashanti?", ""];
// console.log(currentQuestion[]);
// let random;

let answersChoice;

// TIMER CODE //
let intervalId;

// let clockRunning = false;

let number = 45;

document.getElementById("question1").append(currentQuestion[0]);

document.getElementById("question2").append(currentQuestion[1]);

document.getElementById("question3").append(currentQuestion[2]);

document.getElementById("question4").append(currentQuestion[3]);

document.getElementById("question5").append(currentQuestion[4]);

document.getElementById("question6").append(currentQuestion[5]);

document.getElementById("question7").append(currentQuestion[6]);

document.getElementById("question8").append(currentQuestion[7]);

// ****** TIMER *****//
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    number--;
    $("#time-remaining").html(number);
    if (number === 0){
        stop();
    }
}
function stop(){
    clearInterval(intervalId);
}
run();
})