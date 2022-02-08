const CLEAR = 0;
const ADDITION = 1;
const SUBTRACTION = 2;
const MULTIPLICATION = 3;
const DIVISION = 4;
const EQUAL = 5;

let operator = null;
let x, y;

let number = document.querySelectorAll(".btn-angka > button");
let math = document.querySelectorAll(".btn-math > button");
let show = document.querySelector("#show");

number.forEach(num => {
    num.onclick = function () {
        if (show.value == "0") {
            show.value = num.innerHTML;

        } else {
            show.value += num.innerHTML;
            
        }
    }

});

math[CLEAR].onclick = function () {
    show.value = "0";
    operator = null;

}

math[ADDITION].onclick = function () {
    operator = ADDITION;
    x = show.value;
    show.value = "0";

}

math[SUBTRACTION].onclick = function () {
    operator = SUBTRACTION;
    x = show.value;
    show.value = "0";

}

math[MULTIPLICATION].onclick = function () {
    operator = MULTIPLICATION;
    x = show.value;
    show.value = "0";

}

math[DIVISION].onclick = function () {
    operator = DIVISION;
    x = show.value;
    show.value = "0";

}

math[EQUAL].onclick = function () {
    y = show.value;
    show.value = calculator(operator);

}

function calculator(operator) {
    x = parseFloat(x);
    y = parseFloat(y);
    
    if (operator != null) {
        switch (operator) {
            case ADDITION:
                result = x + y;
                break;
        
            case SUBTRACTION:
                result = x - y;
                break;
        
            case MULTIPLICATION:
                result = x * y;
                break;
        
            case DIVISION:
                result = x / y;
                break;
        
        }

        return result;

    }
    
}