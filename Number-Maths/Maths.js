const num1 = 5.7;
const num2 = 3.2;
console.log(Math.abs(-4))
console.log(Math.round(num1))
console.log(Math.ceil(num1))
console.log(Math.floor(num1))
console.log(Math.trunc(num1))
//trunc removes the float part if its an integer it return it without any changing
console.log(Math.max(num1,num2))
console.log(Math.min(num1,num2))
console.log(Math.pow(num1,2))
console.log(Math.sqrt(num1).toFixed(2))
console.log(Math.random() * 100 + 1)

//formula Math.random = Math.Random * (max-min+1)+min
let min = 10, max = 20;
function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(min, max))
