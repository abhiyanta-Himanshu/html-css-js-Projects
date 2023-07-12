const startEl=document.getElementById("start");
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");
const timer= document.getElementById("timer");
const ulEl=document.querySelector(".list");
ulEl.innerHTML=" ";

let interval;
let startTime=0,elapsedTime=0;

function updatetimer(elapsedTime){
    millisec=Math.floor((elapsedTime%1000)/10);
    sec=Math.floor((elapsedTime%(1000*60))/1000);
    min=Math.floor((elapsedTime%(1000*60*60))/(1000*60));
    hour=Math.floor((elapsedTime%(1000*60*60*60))/(1000*60*60));
    timer.innerHTML=`${hour.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}:${millisec.toString().padStart(2,"0")}`;
}

function startTimer(){
    startTime=Date.now()-elapsedTime;
    interval = setInterval(()=>{
        elapsedTime=Date.now()-startTime;
        updatetimer(elapsedTime);
    },10)
    startEl.disabled=true;
    stopEl.disabled=false;
}

function resetTimer(){
    elapsedTime=0;
    clearInterval(interval);
    startEl.disabled=false;
    stopEl.disabled=true;
    timer.innerHTML="00:00:00:00";
    ulEl.innerHTML=" ";
}

function stopTimer(){
    clearInterval(interval);
    startEl.disabled=false;
    stopEl.disabled=true;

    liEl=document.createElement("li");
    liEl.innerHTML=`${hour.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}:${millisec.toString().padStart(2,"0")}`;
    ulEl.prepend(liEl);
}

startEl.addEventListener("click",startTimer);
resetEl.addEventListener("click",resetTimer);
stopEl.addEventListener("click",stopTimer);
