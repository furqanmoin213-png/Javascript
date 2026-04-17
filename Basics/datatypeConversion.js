let str = "Rehan";//string
let boolean = 1;//bool
let obj = {
    objSub: {name: "rehan"},
    number: 22,
    str: "Furqan"
}
let number = 334;

let sym =  Symbol("UniScience")
//Number Conversion

let num = Number(str)
console.log(num)
str="22";
num = Number(str)
console.log(num)

num = Number(boolean);
console.log(num)
//no 
num = Number(obj);
console.log(obj)

//we cannot convert symbol value to a number
// num = Number(sym);
// console.log(num)

//String Conversion

let string = String(number)
console.log(string)

string = String(obj)
console.log(string)

// String => Array Conversion

let strArray = "Furqan";

//1st

console.log( strArray.split(""))

//2nd

console.log(Array(...strArray))

//3rd

console.log(...strArray)


//4th

console.log(Array.from(strArray))

//String => Object


