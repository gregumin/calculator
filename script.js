const add = function(a,b) {return a + b};
const subtract = function(a,b) {return a-b};
const multiple = function(a,b) {return a*b};
const divide = function(a,b) {return a/b};

const numeric = "1234567890"

let firstNum;
let secondNum;
let currentOperator;
//let plus = "+";
//let minus = "-";
//let times = "*";
//let cut = "/";

const operate = (first = firstNum, second = secondNum, operator = currentOperator) => {
switch(operator){
    case "+":
        return add(first,second);
        break;
    case "-":
        return subtract(first,second);
        break;
    case "*":
        return multiply(first,second);
        break;
    case "/":
        return divide(first,second);
        break;
    default:
        return "unknown operation";
}
}

let curVal = 0;
curValArr=[2,0]
updateCurVal = () => {curVal = Number(curValArr.join("")); display.textContent = curVal}

const display = document.querySelector("#display");
display.textContent = curVal;

updateCurVal();

//function that adds current value to firstNum and clears curValArr, used when operator pressed
function updateNum () {
    firstNum = curVal;
    curVal = 0;
    curValArr = [];

}

//function that used when equal is pressed, adds current value to secondNum
function updateNum2 () {
    if (secondNum === undefined) {
        secondNum = firstNum
    } else {
        secondNum = curVal;
    }
}

const btn1 = document.getElementById("btn1");
function add1() {curValArr.push(1); updateCurVal()};
btn1.addEventListener("click", add1);

const btnAdd = document.getElementById("btnAdd");
function opAdd() {currentOperator = "+"; display.textContent = "+"; updateNum()};
btnAdd.addEventListener("click", opAdd);
//make btnadd clear current array and add it to firstNum

const btnEquals = document.getElementById("btnEquals");
function opEquals() {updateNum2(); operate(); display.textContent = operate(); firstNum = operate(); }
btnEquals.addEventListener("click", opEquals);

const btnClear = document.getElementById("btnClear");
function opClear() {firstNum = 0; secondNum = 0; display.textContent = 0}
btnClear.addEventListener("click", opClear);

