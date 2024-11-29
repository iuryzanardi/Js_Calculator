let equation = ''

function sum() {
    return 1 + 1
}

const calculator = document.getElementById('calculator')

calculator.addEventListener('click', sum)

let button = event.target
console.log(button)