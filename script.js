const add = function(a,b) {return a + b};
const subtract = function(a,b) {return a-b};
const multiply = function(a,b) {return a*b};
const divide = function(a,b) {return a/b};
const power = function (a,b) {return a**b};

const numeric = "1234567890";
const symbol = "+-*/";

let firstNum = 0;
let secondNum = 0;
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
    case "**":
        return power(first,second);
        break;
    default:
        return "unknown operation";
}
}

let curVal = 0;
let curValArr=[]
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
        curVal = Math.round((Number(curValArr.join("")))*10000)/10000;
        if (curVal === Infinity) {curVal = "ruh roh"; firstNum = undefined; secondNum = undefined};
    }
}

function equate () {
    
        secondNum = curVal
        operate();
        curValArr = [operate()];
        curVal = Math.round((Number(curValArr.join("")))*10000)/10000;
        if (curVal === Infinity) {curVal = "ruh roh"; firstNum = undefined; secondNum = undefined};
    
}

const btn1 = document.getElementById("btn1");
function add1() {curValArr.push(1); updateCurVal()};
btn1.addEventListener("click", add1);

const btn2 = document.getElementById("btn2");
function add2() {curValArr.push(2); updateCurVal()};
btn2.addEventListener("click", add2);

const btn3 = document.getElementById("btn3");
function add3() {curValArr.push(3); updateCurVal()};
btn3.addEventListener("click", add3);

const btn4 = document.getElementById("btn4");
function add4() {curValArr.push(4); updateCurVal()};
btn4.addEventListener("click", add4);

const btn5 = document.getElementById("btn5");
function add5() {curValArr.push(5); updateCurVal()};
btn5.addEventListener("click", add5);

const btn6 = document.getElementById("btn6");
function add6() {curValArr.push(6); updateCurVal()};
btn6.addEventListener("click", add6);

const btn7 = document.getElementById("btn7");
function add7() {curValArr.push(7); updateCurVal()};
btn7.addEventListener("click", add7);

const btn8 = document.getElementById("btn8");
function add8() {curValArr.push(8); updateCurVal()};
btn8.addEventListener("click", add8);

const btn9 = document.getElementById("btn9");
function add9() {curValArr.push(9); updateCurVal()};
btn9.addEventListener("click", add9);

const btn0 = document.getElementById("btn0");
function add0() {curValArr.push(0); updateCurVal()};
btn0.addEventListener("click", add0);

const btnDecimal = document.getElementById("btnDecimal");
function addDecimal() {if (curValArr.includes(".")) {} else {curValArr.push("."); updateCurVal()}};
btnDecimal.addEventListener("click", addDecimal);

const btnAdd = document.getElementById("btnAdd");
function opAdd() {equateOp(); currentOperator = "+"; display.textContent = "+"; updateNum()};
btnAdd.addEventListener("click", opAdd);

const btnSubtract = document.getElementById("btnSubtract");
function opSubtract() {equateOp(); currentOperator = "-"; display.textContent = "-"; updateNum()};
btnSubtract.addEventListener("click", opSubtract);

const btnMultiply = document.getElementById("btnMultiply");
function opMultiply() {equateOp(); currentOperator = "*"; display.textContent = "*"; updateNum()};
btnMultiply.addEventListener("click", opMultiply);

const btnDivide = document.getElementById("btnDivide");
function opDivide() {equateOp(); currentOperator = "/"; display.textContent = "/"; updateNum()};
btnDivide.addEventListener("click", opDivide);

const btnPower = document.getElementById("btnPower");
function opPower() {equateOp(); currentOperator = "**"; display.textContent = "^"; updateNum()};
btnPower.addEventListener("click", opPower);

const btnEquals = document.getElementById("btnEquals");
function opEquals() {if (firstNum != undefined && secondNum != undefined && curVal != NaN && currentOperator != "") {
    equate(); currentOperator = ""; display.textContent = curVal;
}};
btnEquals.addEventListener("click", opEquals);

const btnClear = document.getElementById("btnClear");
function opClear() {firstNum = 0; secondNum = 0; curVal = 0; curValArr = []; display.textContent = 0; currentOperator = ""}
btnClear.addEventListener("click", opClear);

const btnDel = document.getElementById("btnDel");
function opDel() {curValArr.pop(); updateCurVal()};
btnDel.addEventListener("click", opDel);