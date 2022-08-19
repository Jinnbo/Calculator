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
minus.addEventListener("click", () => operator.minus('-'));


const equal = document.getElementById('equal');
const result = document.getElementById('result');

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

// Result string
let resultString = "";


function updateString(){
    resultString = result.innerHTML;
}


// AC button
function clear(){
    result.innerHTML = "";

    decimalBool = false;
}

// Numbers
function showNumber(e){
    if (result.innerHTML.length <= MAXLENGTH){

        if (e == '.' && decimalBool == false){
            result.innerHTML += `${e}`;
            decimalBool = true;
        }
        else if (e != '.'){
            result.innerHTML += `${e}`;

        }

        updateString();
    }
}

function operator(e){

    switch(e){
        case '+-':

            if (result.innerHTML.charAt(0) != '-'){
                result.innerHTML = '-' + resultString;
            }
            else{
            
                result.innerHTML = result.innerHTML.substring(1);
            }


            updateString();
            break;

    }


}