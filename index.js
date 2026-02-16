console.log("sweeting floating in the ether"); 

// creating js variables for HTML elements 

const calculatorDisplay = document.querySelector(".display"); 
const numberKeys = document.querySelectorAll(".number-key"); 
const clearKey = document.getElementById("clear-key");
const equalKey = document.getElementById("equal-key");
const operatorKey = document.querySelectorAll(".operator-key");

// these are the main global variables (they will always start as undefined)

let num1 = []
let operatorChoice = "";  
let num2 = []
let nextNewNum = []
let answer 
//let equationAnswered = "false"; 

// event listener for the number keys. the listener function gets both number one and number
// two, if the condition has been met 

numberKeys.forEach((numberKey) => numberKey.addEventListener('click',returnNumbersPicked)); 

function returnNumbersPicked(e) {

  if (answer >= 0 && operatorChoice === ""){
    //let newNumSelec = e.target.textContent; 
    //num1.push(newNumSelec); 
    let newNum = e.target.textContent; 
    nextNewNum.push(newNum); 
    console.log(true); 
    console.log(`nextNewNum: ${nextNewNum}`);
    num1.splice(0,num1.length,nextNewNum); 
    console.log(`tester: ${num1}`);
    calculatorDisplay.textContent = `${num1}` //${operatorChoice}`; 
  } if (operatorChoice === "" && answer === undefined){
    let numberPicked = e.target.textContent; 
    num1.push(numberPicked); 
    calculatorDisplay.textContent = `${num1.join("")}`;
    console.log(`num1: ${num1}`); //temporary
  } else if (operatorChoice !== ""){
    let secondNumberPicked = e.target.textContent;
    num2.push(secondNumberPicked); 
    calculatorDisplay.textContent = `${num1.join("")} ${operatorChoice} ${num2.join("")}`; ; 
    console.log(`num2: ${num2}`); //temporary
    console.log("operator choice isn't blank"); 
  }
  
  
  










  /*
  if(equationAnswered === "true" && operatorChoice === ""){
    let newNumSelec = e.target.textContent; 
    num1.push(newNumSelec); 
    console.log(num1); 
  } else if (operatorChoice === ""){
    let numberPicked = e.target.textContent; 
    num1.push(numberPicked); 
    calculatorDisplay.textContent = num1.join("");
    console.log(`num1: ${num1}`); //temporary
  } else if (operatorChoice !== ""){
    let secondNumberPicked = e.target.textContent;
    num2.push(secondNumberPicked); 
    calculatorDisplay.textContent = `${num1.join("")} ${operatorChoice} ${num2.join("")}`; ; 
    console.log(`num2: ${num2}`); //temporary 
  }
*/ 


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

// event listener for the operators key. the listener stores the chosen operator 
// inside of operatorChoice 

operatorKey.forEach((key) => key.addEventListener('click',returnOperatorKey));

function returnOperatorKey(e){
  let operatorPicked = e.target.textContent; 
  operatorChoice = operatorPicked; 
  calculatorDisplay.textContent = `${num1.join("")} ${operatorChoice}`; 
    
  console.log(`operatorChoice: ${operatorChoice}`); //temporary
  console.log(typeof operatorChoice); //temporary
}

//event listener for the equal key. when the listener is clicked, the user is given
// the answer to the equation. 

equalKey.addEventListener('click', retrieveAnswer);

function retrieveAnswer(){
  answer = operate(operatorChoice, num1, num2); 
  calculatorDisplay.textContent = answer; 
  console.log(answer); 
  operatorChoice = ""; 
  num1 = []; 
  num2 = []; 

  if(answer >= 0){
    num1.push(answer); 
   // equationAnswered = "true"; 
    console.log(num1); 
    console.log(num2); 
    console.log("its okay"); 
  }
}

// operate function retrieves the answers for each equation and then returns the 
//answers to the equalKey listener function. 

function operate(operatorChoice,num1,num2,){
  if(operatorChoice === "+"){
    return addition(num1, num2); 
  } //make the rest else if for the other operators 
}

// below are the functions for the addition, subtraction, division, and multiplication
// operators 

function addition(num1 , num2){
  let numberOneString = num1.join(""); 
  let number1 = Number(numberOneString); 

  let numberTwoString = num2.join("");
  let number2 = Number(numberTwoString); 

  return number1 + number2;
}

// event listener for clearKey will reset the display as well as the global variables 

clearKey.addEventListener('click', clearCalculator); 

function clearCalculator(){
  calculatorDisplay.textContent = ""; 
  operatorChoice = "";
  //equationAnswered = "false"; 
  num1 = []; 
  num2 = []; 
  nextNewNum = []; 
  answer = undefined; 
}

/* what I need to work on: the calculator can
do 5 + 2 = 10 + 2 = ... which is great!
But what happends when the user doesn't press 
clear and decides to just start adding new numbers 

5 + 2 = 10 => 7 + 8 = ... 

since the user technically has num1 = [1,0] but no operator 
and a second number, I need to figure out how to write this 
in code so that after getting their answer of 10, if they dont
press an operator next and instead press a random number key,
the num1 array will be made empty and the new number they press
will become num1, which starts the process all 
over again: num1 => operator => num2*/ 


let pizza = ["cheese", "fruit", "cake", 2];

let dessert = ["pudding", "carrotCake"].join("")
console.log(dessert); 

pizza.splice(0,pizza.length,dessert)

 
console.log(`pizzaArray: ${pizza}`)
//calculatorDisplay.textContent = `${pizza}`; 






 