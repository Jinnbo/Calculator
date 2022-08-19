// Constant Variables

const MAXLENGTH = 11;


// Button variables
const ac = document.getElementById('AC');
ac.addEventListener("click",clear)



// Operator Buttons
const plusMinus = document.getElementById('plusMinus');
plusMinus.addEventListener("click", ()=> operator('+-'));

const percent = document.getElementById('percent');
percent.addEventListener("click", () => operator('%'));

const divide = document.getElementById('divide');
divide.addEventListener("click", () => operator('/'));

const multiply = document.getElementById('multiply');
multiply.addEventListener("click", () => operator('*'));

const plus = document.getElementById('plus');
plus.addEventListener("click", () => operator('+'));

const minus = document.getElementById('minus');
minus.addEventListener("click", () => operator('-'));

const equal = document.getElementById('equal');
equal.addEventListener("click", () => operator('='));

const result = document.getElementById('result');

let operatorBool = false;

// Number buttons
const zero = document.getElementById('zero');
zero.addEventListener("click", () => showNumber('0'));

const one = document.getElementById('one');
one.addEventListener("click", () => showNumber('1'));

const two = document.getElementById('two');
two.addEventListener("click", () => showNumber('2'));

const three = document.getElementById('three');
three.addEventListener("click", () => showNumber('3'));

const four = document.getElementById('four');
four.addEventListener("click", () => showNumber('4'));

const five = document.getElementById('five');
five.addEventListener("click", () => showNumber('5'));

const six = document.getElementById('six');
six.addEventListener("click", () => showNumber('6'));

const seven = document.getElementById('seven');
seven.addEventListener("click", () => showNumber('7'));

const eight = document.getElementById('eight');
eight.addEventListener("click", () => showNumber('8'));

const nine = document.getElementById('nine');
nine.addEventListener("click", () => showNumber('9'));

const decimal = document.getElementById('decimal');
decimal.addEventListener("click", () => showNumber('.'));
let decimalBool = false;

// Initialize starting strings
let resultString = "";
let lhs = 0;
let rhs = "";
let tempRes = 0;
let curOperator = "";

function updateString(){
    resultString = result.innerHTML;
}


// AC button
function clear(){
    result.innerHTML = "";
    resultString = ""
    lhs = 0;
    rhs = "";
    tempRes = 0;
    curOperator = "";

    decimalBool = false;
    operatorBool = false;

    clearStyle();
    updateString();
}

function clearStyle(){
    plus.style.filter = "brightness(100%)";
    plus.style.transform = "scale(1)";
    minus.style.filter = "brightness(100%)";
    minus.style.transform = "scale(1)";
    multiply.style.filter = "brightness(100%)";
    multiply.style.transform = "scale(1)";
    divide.style.filter = "brightness(100%)";
    divide.style.transform = "scale(1)";
}


// Display number
function showNumber(e){

    // If length is less than maxlength
    if (result.innerHTML.length <= MAXLENGTH){

        if (e == '.' && decimalBool == false){
            
            if (operatorBool == true){
                result.innerHTML = rhs;
                rhs += e;
            }
            result.innerHTML += `${e}`;
            decimalBool = true;
            
        }
        else if (e != '.'){
            
            // if operator pressed
            if (operatorBool == true){
                result.innerHTML = rhs;
                rhs += e;
            }
            
            result.innerHTML += `${e}`;
    
        }

        updateString();
    }
}

function operator(e){

    if (resultString.length > 0){

        operatorBool = true;

        switch(e){
            // Plus Minus
            case '+-':
                if (result.innerHTML.charAt(0) != '-') result.innerHTML = '-' + resultString;
                else result.innerHTML = result.innerHTML.substring(1);
                
                updateString();
                break;
            
            // Addition
            case '+':
                curOperator = '+';
                decimalBool = false;

                // Darken addition button
                plus.style.filter = "brightness(90%)";
                plus.style.transform = "scale(1.1)";

                // Get lhs
                lhs = parseFloat(resultString);
                    
                // Set resultString to res
                updateString();
                break;
            
            // Subtraction
            case '-':
                curOperator = '-';
                decimalBool = false;

                minus.style.filter = "brightness(90%)";
                minus.style.transform = "scale(1.1)";
                
                lhs = parseFloat(resultString);

                updateString();
                break;

            // Multiplication
            case '*':
                curOperator = '*';
                decimalBool = false;

                multiply.style.filter = "brightness(90%)";
                multiply.style.transform = "scale(1.1)";

                lhs = parseFloat(resultString);

                updateString();
                break;

            // Division
            case '/':
                curOperator = '/';
                decimalBool = false;

                divide.style.filter = "brightness(90%)";
                divide.style.transform = "scale(1.1)";

                lhs = parseFloat(resultString);

                updateString();
                break;

            // Percent
            case '%':
                lhs = parseFloat(resultString);

                tempRes = lhs/100;
                result.innerHTML = tempRes;
                updateString();
                break;

            // Equal
            case '=':
                
                rhs = parseFloat(rhs);

                if (curOperator == "+") tempRes = lhs+rhs;
                if (curOperator == "-") tempRes = lhs-rhs;
                if (curOperator == "*") tempRes = lhs*rhs;
                if (curOperator == "/") tempRes = lhs/rhs;

                // Result is too long
                if (tempRes.toString().length > MAXLENGTH){
                    console.log(tempRes);
                    tempRes = tempRes.toExponential(2);
                }
                
                result.innerHTML = tempRes;
                rhs = "";

                clearStyle();
                updateString();
                break;
                
        }
    }


}