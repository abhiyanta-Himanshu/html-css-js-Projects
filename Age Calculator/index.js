const btnEl = document.getElementById("btn");

const birthDate = document.getElementById("birthDate");

function calculateAge() {
    const birthValue = birthDate.value;
    //console.log(birthValue);
    if (birthValue==="") {
        alert("Please Enter your birthday date");
    }
    else{
        let birthYear=0;
        for(let i=0;i<4;i++){
            birthYear=parseInt((birthYear*10))+parseInt(birthValue[i]);
        }
        let birthMonth=0;
        for (let i=5; i<7; i++) {
            birthMonth=parseInt(birthMonth*10)+parseInt(birthValue[i]);            
        }
        let birthDate=0;
        for (let i=8; i<10; i++) {
            birthDate=parseInt(birthDate*10)+parseInt(birthValue[i]);            
        }
        console.log(birthYear,birthMonth,birthDate);
        getAge(birthDate,birthMonth,birthYear);
        
    }

}

function getAge(birthDate,birthMonth,birthYear){
    let year , month , day;
    const current = new Date();
    const currentDate = current.getDate();
    const currentMonth = current.getMonth();
    const currentYear = current.getFullYear();
    console.log(currentDate,currentMonth,currentYear);
    year=currentYear-birthYear;
    if(currentMonth>=birthMonth){
        month=currentMonth-birthMonth;
    }else{
        month=(12-birthMonth)+currentMonth+1;
        year--;
        if(month>=12){
            month=month-12;
            year++;
        }
    }
    if(currentDate>=birthDate){
        day=currentDate-birthDate;
    }else{
        day=(30-birthDate)+currentDate;
        month--;
    }
    console.log(year,month,day);
    show(year,month,day);
}

function show(year,month,day){
    const display = document.getElementById("result");
    display.innerText = `Your age is : ${year} Year , ${month} month , ${day} days.`;
    document.getElementById("result").classList.remove("resultVisiblity")
}

btnEl.addEventListener("click",calculateAge);