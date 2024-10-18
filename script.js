const add = function(a,b) {return a + b};
const subtract = function(a,b) {return a-b};
const multiple = function(a,b) {return a*b};
const divide = function(a,b) {return a/b};

let firstNum = 0;
let secondNum = 0;
let operator;

let plus = "+";
let minus = "-";
let times = "*";
let cut = "/";

const operate = (firstNum, secondNum, operator) => {
switch(operator){
    case "+":
        return add(firstNum,secondNum);
        break;
    case "-":
        return subtract(firstNum,secondNum);
        break;
    case "*":
        return multiply(firstNum,secondNum);
        break;
    case "/":
        return divide(firstNum,secondNum);
        break;
    default:
        return "unknown operation";
}
}



