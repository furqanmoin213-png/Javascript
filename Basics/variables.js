"use strict";
const accountId = 33456;
let accountName = "John Doe";
let accountBalance = 1000.50;
// isActive = true;
console.table([accountId,accountName,accountBalance]);


let num1 = 10;
var num2 = 20
const num3 = 30

//let keyword

{
    num1 = 11
    // let num1 = 40
    //if you have declared same variable of same variable name 
    //it will like vanish the earlier one it will not take it
}
console.log(num1)
{
    let num1 = 12
}
console.log(num2)
//beacuse above its scope is block scope if you declare it using var it will change the value

console.log(y);
let y = 10;
//let and const are also hoisted but they are kept in tempporal dead zone

//Temporal Dead Zone

//The time between variable hoisting and its initialization.

//Var Keyword


function length_num()
{
    // var num2 = 50;
    //same as let don`t redeclare as the scope one wil be traeted as the prior one
    console.log(`Inside Function Var ${num2}`)
    num2 = 21
    num1 = 13
}
length_num()
console.log(num1)
console.log(num2)


{
    var num2 = 22
}


// Hoisting in JavaScript means:

// Declarations of variables and functions are moved to the top of their scope during the compilation phase (before code execution).

var a;        // hoisted declaration
console.log(a); // undefined
a = 10;       // initialization happens later

//const keyword




