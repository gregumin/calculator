const add = function(a,b) {return a + b};
const subtract = function(a,b) {return a-b};
const multiple = function(a,b) {return a*b};
const divide = function(a,b) {return a/b};

const numeric = "1234567890"

let firstNum;
let secondNum;
let currentOperator = "";
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
//function that updates onscreen digits live
updateCurVal = () => {curVal = Number(curValArr.join("")); display.textContent = curVal}

const display = document.querySelector("#display");
display.textContent = curVal;

updateCurVal();

//function that adds current value to firstNum and clears curValArr, used when operator pressed
function updateNum () {
    firstNum = curVal;
    curValArr = [];
    curVal = 0;

}

//function that used when equal is pressed, adds current value to secondNum (still problematic)
//works when +==== but when i + again firstnum is secondnum instead of operator so mistake
function equateOp () {
    if (currentOperator === "") {

    } else {
        secondNum = curVal
        operate();
        curValArr = [operate()];
        curVal = Number(curValArr.join(""));
    }
}

function equate () {
    
        secondNum = curVal
        operate();
        curValArr = [operate()];
        curVal = Number(curValArr.join(""));
    
}

const btn1 = document.getElementById("btn1");
function add1() {curValArr.push(1); updateCurVal()};
btn1.addEventListener("click", add1);

const btnAdd = document.getElementById("btnAdd");
function opAdd() {equateOp(); currentOperator = "+"; display.textContent = "+"; updateNum()};
btnAdd.addEventListener("click", opAdd);
//make btnadd clear current array and add it to firstNum

const btnEquals = document.getElementById("btnEquals");
function opEquals() {equate(); currentOperator = ""; display.textContent = curVal;}
btnEquals.addEventListener("click", opEquals);

const btnClear = document.getElementById("btnClear");
function opClear() {firstNum = 0; secondNum = 0; display.textContent = 0; currentOperator = ""}
btnClear.addEventListener("click", opClear);

