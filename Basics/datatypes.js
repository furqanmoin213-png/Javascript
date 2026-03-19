"use strict";//it means to use the current strict version of js

console.log(typeof 66)
console.log(typeof "abc")
console.log("null:",typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof Symbol)
//Number
console.log("Number.MAX_VALUE:", Number.MAX_VALUE)
console.log("Number.MIN_VALUE:", Number.MIN_VALUE)
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY)
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY)
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER)
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER)
console.log("42 / +0:", 42 / +0); // Infinity
console.log("42 / -0:", 42 / -0); // -Infinity

const bigInt = 9n;
console.log(typeof bigInt)
console.log(undefined === undefined)
console.log(null === null)
console.log(null == undefined)
console.log(null === undefined)
