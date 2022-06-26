var button=document.querySelector(".circle");
const adviceText = document.querySelector(".adviceText");
const adviceId = document.querySelector(".adviceId");
const url="https://api.adviceslip.com/advice";

window.onload=fetchAdvice();
button.addEventListener('click',fetchAdvice); 
//remember to always write function name instead of calling function as then it would run function before adding click eventlistener

function fetchAdvice(){
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        adviceId.textContent=data.slip.id;
        adviceText.textContent='"'+data.slip.advice+'"';
    });
}

