const startEl=document.getElementById("start");
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");
const timer= document.getElementById("timer");

// console.log(timer.innerHTML);

let interval;
let timeLeft=12;

function updatetimer(){
    let minutes=Math.floor(timeLeft/60);
    let seconds=timeLeft%60;
    timer.innerHTML=`${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,"0")}`;
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updatetimer();
        if(timeLeft===0){
            timeLeft=12;
            clearInterval(interval);
        }
    },1000)}

function resetTimer(){
    timeLeft=12;
    clearInterval(interval);
    timer.innerHTML="25:00";
}

function stopTimer(){
    clearInterval(interval);
}

startEl.addEventListener("click",startTimer);
resetEl.addEventListener("click",resetTimer);
stopEl.addEventListener("click",stopTimer);
