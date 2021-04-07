//opdracht 1: 

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    
    return sum;
}

console.log(sumAll(1));                 // 1
console.log(sumAll(1,2,4,5,8));         // 20
console.log(sumAll(100,54,545,6454));   // 7153

//opdracht 2: 

const sum = function (number1, number2, number3){
    return number1 + number2 + number3;
}

const numbers = [54,78,42];

console.log(sum(...numbers)); // 174
