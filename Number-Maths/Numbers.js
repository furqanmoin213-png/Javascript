const age = new Number(22);
const pi = new Number(3.149874654321);
const name = new String("Furqan");
const age1 = Number(22);
const names = String("Furqan")
console.log(typeof age, typeof name)
console.log(typeof Number, typeof String)
console.log(typeof Number(), typeof String());
console.log(typeof age1, typeof names)


console.log(age.toString().length)
console.log(pi.toFixed(3))
console.log(pi.toPrecision(3))

const hundreds = 1000000000;
console.log(hundreds.toLocaleString())

console.log(age.valueOf())
console.log(pi.valueOf())
console.log(hundreds.toExponential(3))

const num1 = 2, num2 = 33;
console.log(Number.isFinite(num1/num2));
console.log(Number.isFinite(1/0))
console.log(Number.isFinite(Infinity))
let obj = {
    "name" : "Furqan",
    "age" : 22
};

//Math


