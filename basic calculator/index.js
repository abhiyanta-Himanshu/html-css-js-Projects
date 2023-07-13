let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        
        if(button.innerHTML === '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.length>1?string.substring(0,string.length-1):"";
            input.value=string;
        }
        else{
            string += button.innerText;
            input.value=string;
        }
    })
});