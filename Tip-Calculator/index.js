let billInput = document.getElementById("bill");

let percentageInput = document.getElementById("percentage");

const btn = document.getElementsByClassName("btn")[0];

const show = document.getElementsByTagName("span")[0];

function calculate(){
    const bill = parseInt(billInput.value);
    const percenatge = parseInt(percentageInput.value);
    // console.log(bill,percenatge);
    const total = bill+(bill*percenatge/100);
    console.log(total);
    show.innerText = `₹${total}`;
}

btn.addEventListener("click",calculate);


