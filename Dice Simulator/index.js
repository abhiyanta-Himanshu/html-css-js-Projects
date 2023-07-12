let rollnumber=1;

const btnEl=document.getElementById("RollBtn");

const dice = document.querySelector(".DiceRoll");

const ulItem=document.querySelector(".Roll-history");
ulItem.innerHTML=" ";

function rollDice(){
    result = Math.ceil(Math.random()*6);
    // console.log(result);
    result=result+9855;
    return "&#"+result;  
}

function changeDiceFace(diceNum){
    dice.innerHTML=diceNum;
}

function addHistory(diceNum){
    let liItem=document.createElement("li");
    liItem.innerHTML=`Roll ${rollnumber++} :<span> ${diceNum}</span>`;
    ulItem.prepend(liItem);
    console.log(liItem.innerHTML);
}

btnEl.addEventListener("click",()=>{
    dice.classList.add("roll-animation");
    setTimeout(()=>{
        dice.classList.remove("roll-animation");
    },1000)
    let diceNum=rollDice();
    changeDiceFace(diceNum);
    addHistory(diceNum);
    // console.log(diceNum);
})