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
let movetoNext = document.querySelectorAll('.questionOne')
let movetoNext2 = document.querySelectorAll('.questionTwo')
let movetoNext3 = document.querySelectorAll('.questionThree')
let movetoNext4 = document.querySelectorAll('.questionFour')
let movetoNext5 = document.querySelectorAll('.questionFive')
let movetoNextScore = document.querySelectorAll('.scoreboard')

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
  
       
            movetoNext.forEach(movetoNext=>{
                movetoNext.addEventListener("click", function(){setTimeout(questionTwo,1000);}) 
        })
    }
    

function questionTwo(){
    contTwo.style.display="block";
    contStart.style.display="none";
    contOne.style.display ="none";
    movetoNext2.forEach(movetoNext2=>{
    movetoNext2.addEventListener("click", function(){setTimeout(questionThree,1000);}) 
})
}
function questionThree(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "block";
    movetoNext3.forEach(movetoNext3=>{
        movetoNext3.addEventListener("click", function(){setTimeout(questionFour,1000);}) 
})
}
function questionFour(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "none";
    contFour.style.display="block";
    movetoNext4.forEach(movetoNext4=>{
        movetoNext4.addEventListener("click", function(){setTimeout(questionFive,1000);}) 
})
}
function questionFive(){
    contTwo.style.display="none";
    contStart.style.display="none";
    contOne.style.display ="none";
    contThree.style.display = "none";
    contFour.style.display="none";
    contFive.style.display ="block";
    movetoNext5.forEach(movetoNext5=>{
        movetoNext5.addEventListener("click", function(){setTimeout(scoreResults,1000);}) 
})
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