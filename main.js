let startButton = document.querySelector(".btnStart");
let contStart= document.querySelector(".containerStart");
let contOne = document.querySelector(".containerOne");
let contTwo=document.querySelector(".containerTwo");
let contThree=document.querySelector(".containerThree");
let contFour = document.querySelector(".containerFour");
let contFive = document.querySelector(".containerFive");
let contScore= document.querySelector(".containerScore");
let contLast = document.querySelector(".containerLast");
let correct= document.querySelectorAll(".correct");
let correctBtn =document.querySelector("#btnCorrect1")
let incorrect = document.querySelectorAll(".incorrect")

let answerBtn = document.querySelectorAll(".btn")


startButton.addEventListener("click", startQuiz);



function startQuiz(){
    contOne.style.display="block";
    contStart.style.display="none";
 
    correctAnswer()
   
}

    function correctAnswer(){

     incorrect.forEach(incorrect=>{
        incorrect.addEventListener("click", ()=> incorrect.style.backgroundColor="red");
     })
     correct.forEach(correct=>{
        correct.addEventListener("click", ()=>correct.style.backgroundColor="green");
    })

    }

function questionTwo(){
    contTwo.style.display="block";
    contStart.style.display="none";
    contOne.style.display ="none";
   
}
function questionThree(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "block";
}
function questionFour(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "none";
    contFour.style.display="block";
}
function questionFive(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "none";
    contFour.style.display="none";
    contFive.style.display ="block";
}
function scoreResults(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "none";
    contFour.style.display="none";
    contFive.style.display ="none";
    contScore.style.display ="block";
}