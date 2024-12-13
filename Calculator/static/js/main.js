const equalButton = document.querySelector("button[data-value='=']");

const commaButton = document.querySelector("button[data-value=',']");

// Aplica border-radius apenas no canto inferior esquerdo para '='
equalButton.style.borderBottomRightRadius = "10px"; 


// Aplica border-radius apenas no canto inferior direito para ','
commaButton.style.borderBottomLeftRadius = "10px";

let equation = ''

function sum(event) {
    if (event.target.dataset.value == '=') {
        result = eval(equation)
        document.getElementById('monitor-text').innerHTML = result
        result = null
        equation = ''
    }
    else { 
        equation += event.target.dataset.value
        document.getElementById('monitor-text').innerHTML = equation
    }
    if (event.target.dataset.value == 'C') {
        result = null
        equation = ''
        document.getElementById('monitor-text').innerHTML = ''
    }
}

const calculator = document.getElementById('calculator-body')

calculator.addEventListener('click', sum)

