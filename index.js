console.log("sweeting floating in the ether"); 

// creating js variables for HTML elements 

const calculatorDisplay = document.querySelector(".display"); 
const numberKeys = document.querySelectorAll(".number-key"); 
const clearKey = document.getElementById("clear-key");
const equalKey = document.getElementById("equal-key");
const operatorKey = document.querySelectorAll(".operator-key");

// these are the main global variables (they will always start as undefined)

let number1 
let num1 = []
let operatorChoice = "";  
let num2 = []
let equationAnswer 


numberKeys.forEach((numberKey) => numberKey.addEventListener('click',returnNumbersPicked)); 

function returnNumbersPicked(e) {
  if(operatorChoice === ""){
    let numberPicked = e.target.textContent; 
    num1.push(numberPicked); 
    calculatorDisplay.textContent = num1.join("");
    console.log(`num1: ${num1}`); 
  } else {
    let secondNumberPicked = e.target.textContent;
    num2.push(secondNumberPicked); 
    calculatorDisplay.textContent = `${num1.join("")} ${operatorChoice} ${num2.join("")}`; ; 
    console.log(`num2: ${num2}`); 
  }
}

operatorKey.forEach((key) => key.addEventListener('click',returnOperatorKey));

function returnOperatorKey(e){
  let operatorPicked = e.target.textContent; 
  operatorChoice = operatorPicked; 
  calculatorDisplay.textContent = `${num1.join("")} ${operatorChoice}`; 
    
  console.log(`operatorChoice: ${operatorChoice}`); 
  console.log(typeof operatorChoice); 
}

function operate(operatorChoice,num1,num2,){
  if(operatorChoice === "+"){
    return numsAdd(num1,num2); 
  }
}

const additionOperator = {
  numsAdd: function(num1,num2){
    return num1 + num2 
  }
}