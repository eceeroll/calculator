var input = document.getElementById("userInput");
var expression = '';

function press(x) { // this function shows the inputs
    expression += x;
    input.value = expression;
}

function equal() {
    input.value = eval(expression);
    expression = "";
}

function erase() {
    expression = "";
    input.value = expression;
}