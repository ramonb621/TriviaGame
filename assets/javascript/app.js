$(document).ready(function(){
  

let currentQuestion = ["Which is the most popular energy drink in the US?", "Which hit show from the 90's starred a family of 5 with yellow skin and big googly eyes?", "Which actor starred as \'Dalton\' in 1989's hit \"Road House\"?", "Which artist is known for realeasing hit song \"What's luv?\" in 2001 which featured Ashanti?", "Which was the most successful US film of the 90's?", "When did Ozzy Osbourne bite a bat's head off?", "Which is the most popular chip in the US?", "Which musical group performed the hit song \"Candy Girl\"?"]
    
let answer = {
    answersChoice: {
        questionSet1: ["Monster", "Bang", "Red Bull", "Rockstar"],
        questionSet2: ["Full House", "The Simpsons", "Family Matters", "The Wonder Years"],
        questionSet3: ["Patrick Swayze", "Jean Claude Van Damme", "Chuck Norris", "Sylvester Stallone"],
        questionSet4: ["Nelly", "Cam'ron", "Sean Paul", "Fat Joe"],
        questionSet5: ["Forrest Gump", "Titanic", "The Lion King", "Independence Day"],
        questionSet6: ["1993", "1986", "1997", "1982"],
        questionSet7: ["Cheetos", "Cool Ranch Doritos", "Cheddar & Sour Cream Ruffles", "Lays Barbecue"],
        questionSet8: ["Musical Youth", "New Edition", "Boyz 2 Men", "Michael Jackson"]
    },
    answers: [{
        answer1: "Red Bull",
        answer2: "The Simpsons",
        answer3: "Patrick Swayze",
        answer4: "Fat Joe",
        answer5: "Titanic",
        answer6: "1982",
        answer7: "Cheetos",
        answer8: "New Edition"
    }]
};
let answerPick = answer.answersChoice;

// let answerArr= [];

let wins = 0;

let losses = 0;

let wrongAnswers = 0;

let correctAnswers = 0;
    
let intervalId;

let number = 31;

// QUESTIONS //
document.getElementById("question1").prepend(currentQuestion[0]);

document.getElementById("question2").prepend(currentQuestion[1]);

document.getElementById("question3").prepend(currentQuestion[2]);

document.getElementById("question4").prepend(currentQuestion[3]);

document.getElementById("question5").prepend(currentQuestion[4]);

document.getElementById("question6").prepend(currentQuestion[5]);

document.getElementById("question7").prepend(currentQuestion[6]);

document.getElementById("question8").prepend(currentQuestion[7]);

// function arrayToList(){
//     for(let i = 0; i < answer.answers.length; i++){
//         answerArr = answer.answers[i];
//     }
// }

// ANSWER CHOICES//
document.getElementById("answers1-1").append = answerPick.questionSet1[0];
document.getElementById("answers1-2").append = answerPick.questionSet1[1];
document.getElementById("answers1-3").append = answerPick.questionSet1[2];
document.getElementById("answers1-4").append = answerPick.questionSet1[3];

document.getElementById("answers2-1").append = answerPick.questionSet2[0];
document.getElementById("answers2-2").append = answerPick.questionSet2[1];
document.getElementById("answers2-3").append = answerPick.questionSet2[2];
document.getElementById("answers2-4").append = answerPick.questionSet2[3];

document.getElementById("answers3-1").append = answerPick.questionSet3[0];
document.getElementById("answers3-2").append = answerPick.questionSet3[1];
document.getElementById("answers3-3").append = answerPick.questionSet3[2];
document.getElementById("answers3-4").append = answerPick.questionSet3[3];

document.getElementById("answers4-1").append = answerPick.questionSet4[0];
document.getElementById("answers4-2").append = answerPick.questionSet4[1];
document.getElementById("answers4-3").append = answerPick.questionSet4[2];
document.getElementById("answers4-4").append = answerPick.questionSet4[3];

document.getElementById("answers5-1").append = answerPick.questionSet5[0];
document.getElementById("answers5-2").append = answerPick.questionSet5[1];
document.getElementById("answers5-3").append = answerPick.questionSet5[2];
document.getElementById("answers5-4").append = answerPick.questionSet5[3];

document.getElementById("answers6-1").append = answerPick.questionSet6[0];
document.getElementById("answers6-2").append = answerPick.questionSet6[1];
document.getElementById("answers6-3").append = answerPick.questionSet6[2];
document.getElementById("answers6-4").append = answerPick.questionSet6[3];

document.getElementById("answers7-1").append = answerPick.questionSet7[0];
document.getElementById("answers7-2").append = answerPick.questionSet7[1];
document.getElementById("answers7-3").append = answerPick.questionSet7[2];
document.getElementById("answers7-4").append = answerPick.questionSet7[3];

document.getElementById("answers8-1").append = answerPick.questionSet8[0];
document.getElementById("answers8-2").append = answerPick.questionSet8[1];
document.getElementById("answers8-3").append = answerPick.questionSet8[2];
document.getElementById("answers8-4").append = answerPick.questionSet8[3];

// THE IDEA BEHIND THIS IS TO HAVE THE RADIO BUTTONS COMPARE RIGHT AND WRONG ANSWERS TO ANSWER ARRAY AND LOG THEM AT THE END OF EACH SESSION
function scoreKeep(){
    // let realAnswer;
    // for(let i = 0; i < answer.answers.length; i++){
    //     realAnswer += answer.answers.length[i];
    //     if($("input[type=radio]:checked") == realAnswer){
    //        realAnswer + correctAnswers++;
    //     } else {
    //         wrongAnswers++;
    //     }
    let rightGuess = answer.answers[0];

        $.each($("input[name=question1]:checked"),function(){
        if($(this).val() == rightGuess.answer1){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }

        console.log(rightGuess.answer1);
    })
        $.each($("input[name=question2]:checked"),function(){
        if($(this).val() == rightGuess.answer2){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    })
        $.each($("input[name=question3]:checked"),function(){
        if($(this).val() == rightGuess.answer3){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    })
        $.each($("input[name=question4]:checked"),function(){
        if($(this).val() == rightGuess.answer4){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    })
        $.each($("input[name=question5]:checked"),function(){
        if($(this).val() == rightGuess.answer5){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    })
    $.each($("input[name=question6]:checked"),function(){
        if($(this).val() == rightGuess.answer6){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    })
    $.each($("input[name=question7]:checked"),function(){
        if($(this).val() == rightGuess.answer7){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    })
    $.each($("input[name=question8]:checked"),function(){
        if($(this).val() == rightGuess.answer8){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        console.log($("input[name=question8]:checked"));
    })
        gameSummaryPage();
    
}

// IS SUPPOSED TO GENERATE END SCORE FOR THE GAME SESSION 
function gameSummaryPage(){
    if (correctAnswers === 8){
        wins++;
        correctAnswers;
        wrongAnswers;
    } else {
        losses++;
        correctAnswers;
        wrongAnswers;
    }
    $(".wins").append("Wins:" + wins);
    $(".losses").append("Losses:" + losses);
    $(".correct-answers").append("Correct Answers:" + correctAnswers);
    $(".wrong-answers").append("Wrong Answers:" + wrongAnswers);
}
// ****** TIMER *****// IS SUPPOSED TO STOP TIMER AND LOG SCORE AT THE END OF SESSION PULLING FROM RADIO BUTTONS BEING CHECKED
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    number--;
    $("#time-remaining").html(number);
    if (number === 0){
        scoreKeep();
        stop();
    }
}
function stop(){
    clearInterval(intervalId);
}
run();
})