console.log("sweeting floating in the ether"); 

// creating js variables for HTML elements 
 
const calculatorDisplay = document.querySelector(".display")
const numberKeys = document.querySelectorAll(".number-key"); 
const clearKey = document.getElementById("clear-key");
const equalKey = document.getElementById("equal-key");
const operatorKey = document.querySelectorAll(".operator-key");
const decimalKey = document.getElementById("decimal-key")

// these are the main global variables (they will always start as undefined or empty)

let num1 = []
let operatorChoice = "";  
let num2 = []
let nextNewNum = []
let answer 

// event listener for the number keys. the listener function gets both number one and number
// two, if the condition has been met 

numberKeys.forEach((numberKey) => numberKey.addEventListener('click',returnNumbersPicked)); 

function returnNumbersPicked(e) {

  if (operatorChoice === "" && answer >= 0 || operatorChoice === "" && answer < 0){
    let newNum = e.target.textContent;  
    nextNewNum.push(newNum); 
    console.log(`nextNewNum: ${nextNewNum}`); //temporary
    num1.splice(0,num1.length,nextNewNum.join("")); 
    console.log(`tester: ${num1}`); //temporary 
    calculatorDisplay.value = `${num1}`; 
  } if (operatorChoice === "" && answer === undefined){
    let numberPicked = e.target.textContent; 
    num1.push(numberPicked); 
    calculatorDisplay.value = `${num1.join("")}`;
    console.log(`num1: ${num1}`); //temporary
  } else if (operatorChoice !== ""){
    let secondNumberPicked = e.target.textContent;
    num2.push(secondNumberPicked); 
    calculatorDisplay.value = `${num1.join("")} ${operatorChoice} ${num2.join("")}`; 
    console.log(`num2: ${num2}`); //temporary
    console.log("operator choice isn't blank"); //temporary
  }
  
/*
  if(operatorChoice === ""){
    let numberPicked = e.target.textContent; 
    num1.push(numberPicked); 
    calculatorDisplay.textContent = num1.join("");
    console.log(`num1: ${num1}`); //temporary
  } else {
    let secondNumberPicked = e.target.textContent;
    num2.push(secondNumberPicked); 
    calculatorDisplay.textContent = `${num1.join("")} ${operatorChoice} ${num2.join("")}`; ; 
    console.log(`num2: ${num2}`); //temporary 
  }
 */ 
}

// extra credit: decimal event listener gives the use the option to add a decimal 
// to num1 and/or num2 

decimalKey.addEventListener("click", addDecimal); 

function addDecimal(e){

  if(answer === undefined && num1.length >= 0 && operatorChoice === ""){
    let decimalNumOne = e.target.textContent; 
    num1.push(decimalNumOne); 
    calculatorDisplay.value = `${num1.join("")}`; 
    console.log(`num1: ${num1}`); 
    console.log("decimal 1 clicked");
    decimalKey.removeEventListener("click", addDecimal)  
  } if (operatorChoice !== "" && num2.length >= 0){
    let decimalNumTwo = e.target.textContent; 
    num2.push(decimalNumTwo); 
    calculatorDisplay.value = `${num1.join("")} ${operatorChoice} ${num2.join("")}`;
    console.log("clicking decimal for num2") 
    decimalKey.removeEventListener("click", addDecimal);
  } else if (answer >= 0 || answer < 0){
    decimalKey.removeEventListener("click", addDecimal);
  }
}

// event listener for the operators key. the listener stores the chosen operator 
// inside of operatorChoice 

operatorKey.forEach((key) => key.addEventListener('click',returnOperatorKey));

function returnOperatorKey(e){

  if(num1.length === 0){
    calculatorDisplay.value = ""; 
  } else if (num1.length !== 0 && operatorChoice !== "" && num2.length !== 0){ 
    retrieveAnswer(); 
  } else if(num1.length !== 0){
    let operatorPicked = e.target.textContent; 
    operatorChoice = operatorPicked; 
    calculatorDisplay.value = `${num1.join("")} ${operatorChoice}`;
    decimalKey.addEventListener("click", addDecimal); 
  } 
    
  console.log(`operatorChoice: ${operatorChoice}`); //temporary
  console.log(typeof operatorChoice); //temporary
 
}

//event listener for the equal key. when the listener is clicked, the user is given
// the answer to the equation. 

equalKey.addEventListener('click', retrieveAnswer);

function retrieveAnswer(){
  answer = operate(operatorChoice, num1, num2); 

  if(answer === Infinity){
    calculatorDisplay.value = "oops ( •̯́ ₃ •̯̀ )";
    operatorChoice = "";
    num1 = []; 
    num2 = []; 
    nextNewNum = []; 
    answer = undefined; 
  } else {
    calculatorDisplay.value = answer;  
    console.log(answer); 
    operatorChoice = ""; 
    num1 = []; 
    num2 = []; 
    nextNewNum = []; 
    decimalKey.addEventListener("click", addDecimal); 
  }
  
  if(answer >= 0 || answer < 0){
    num1.push(answer);  
    console.log(num1); 
    console.log(num2); 
  } 
}

// operate function retrieves the answers for each equation and then returns the 
//answers to the equalKey listener function. 

function operate(operatorChoice,num1,num2,){
  if(operatorChoice === "+"){
    return addition(num1, num2); 
  } else if (operatorChoice === "−"){
    return subtraction(num1, num2); 
  } else if (operatorChoice === "×"){
    return multiplication(num1, num2); 
  } else if (operatorChoice === "÷"){
    return division(num1, num2); 
  }
}

// below are the functions for the addition, subtraction, division, and multiplication
// operators 

function addition(num1 , num2){
  let firstNum = convertNum1(num1); 
  let secondNum = convertNum2(num2); 

  return firstNum + secondNum;
} 

function subtraction(num1, num2){
  let firstNum = convertNum1(num1); 
  let secondNum = convertNum2(num2);

  return firstNum - secondNum;
}

function multiplication(num1, num2){
  let firstNum = convertNum1(num1); 
  let secondNum = convertNum2(num2);

  return firstNum * secondNum;
}

function division(num1, num2){
  let firstNum = convertNum1(num1);
  let secondNum = convertNum2(num2); 

  return firstNum / secondNum; 
}

// these two functions converts array num1 and num2 from strings to numbers 

function convertNum1(num1){
  let numberOneString = num1.join(""); 
  let number1 = Number(numberOneString); 
  return number1; 
}

function convertNum2(num2){
  let numberTwoString = num2.join("");
  let number2 = Number(numberTwoString);
  return number2; 
}

// event listener for clearKey will reset the display as well as the global variables 

clearKey.addEventListener('click', clearCalculator); 

function clearCalculator(){
  calculatorDisplay.value = ""; 
  operatorChoice = "";
  num1 = []; 
  num2 = []; 
  nextNewNum = []; 
  answer = undefined; 
  decimalKey.addEventListener("click", addDecimal); 
  console.log("clearCal pressed"); 
}

// attempt the last extra credit!!!
