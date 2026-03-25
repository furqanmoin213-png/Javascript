"use strict";
const accountId = 33456;
let accountName = "John Doe";
let accountBalance = 1000.50;
// isActive = true;
console.table([accountId,accountName,accountBalance]);

let name = "Furqan";

{
   let name = "Rehan"
}
console.log(name);

var age = 22;
function calculate()
{   var age =  20;
    return age
}
{
    var age = age + 33;
}
console.log(age)
console.log(calculate())
console.log(age)
//var and let both have some scope in their scope if we update their value it gets updated while if we redeclare the same variable it doesn`t update value rather creates a new varable keep in mind var can be redeclared with its value change. 

