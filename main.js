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
let incorrect=document.querySelectorAll(".incorrect");
let answerBtn = document.querySelectorAll(".btn")

startButton.addEventListener("click", startQuiz);





function startQuiz(){
    contOne.style.display="block";
    contStart.style.display="none";

   
    for (let i=0; i < answerBtn.length; i++){
    answerBtn[i].addEventListener("click", correctAnswer)
}

}

function correctAnswer(){
    if(correct ="true"){
      document.querySelector(".btn").style.backgroundColor="green"  
    } else if (incorrect = "true"){
        document.querySelector(".btn").style.backgroundColor="red"
    }
}
