let digit = ""
let buffer = ""
let total = 0;
let previousOperator = null

const inputScreen = document.querySelector(".input");

document
    .querySelector(".keyboard")
    .addEventListener("click", function(event) {
        keyPress(event.target.innerText);
});

function keyPress(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = "";
            total = 0;
            break;
        case '←':
            buffer = buffer.substring(0, buffer.length -1);
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + total;
            total = 0;
            break;
        default:
            handleMath(value);
            break;
    }
    rerender();
}

function handleNumber(value) {
    buffer += value;
    rerender();
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (total === 0) {
        total = intBuffer;
    } else {
    flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = "";
}

function flushOperation(intBuffer) {
    if (previousOperator === '÷') {
        buffer = "" + intBuffer;
        total /= intBuffer;
    } else if (previousOperator === 'x') {
        buffer = "" + intBuffer;
        total *= intBuffer;
    } else if (previousOperator === '-') {
        buffer = "" + intBuffer;
        total -= intBuffer;
    } else if (previousOperator === '+') {
        buffer = "" + intBuffer;
        total += intBuffer;
    }
}

function rerender() {
    inputScreen.innerText = buffer;
}