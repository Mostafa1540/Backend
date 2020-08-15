let numbers = [1,2,5,7,8,9];
let sum = ""

numbers.map(addPercent)

function addPercent(value) {
    sum = sum + value + 10
}

console.log(sum)