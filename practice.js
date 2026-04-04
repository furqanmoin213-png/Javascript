"use strict";
console.log(typeof null);
console.log(typeof NaN)
console.log(isNaN([]))
console.log(Number([]))
console.log(isNaN(new Date()))
console.log(isNaN({}))
console.log(isNaN(/[0-9]/gi))
console.log(isNaN(""))
console.log(null == null)
console.log(null === null)
console.log(null >= 0)
console.log(null <= 0)
console.log(null == 0)
// == does type coersion while === does also check type
console.log(typeof undefined)
console.log(typeof Symbol())
console.log(typeof Symbol)
console.log(undefined == undefined)
console.log(undefined === undefined)
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0)
console.log(undefined == null)
console.log(undefined === null)

//because
console.log("5" + 55);
console.log(5 + 5 + "55")
console.log(9 - "8")
console.log("7" - 8)
console.log([]+[])
console.log({} + [])
console.log(+[]+{})
console.log(+[])
console.log(+{})
console.log("" == 0)
console.log("" === 0);
console.log("5" == 5);
console.log("5" === 5)
console.log("apple" < "banana")
console.log(undefined + 1)
console.log(undefined + {} + [])
console.log(![] + {})
console.log({} + ![])
console.log(NaN == 0)
console.log([] == false)
console.log([] +[])
console.log([][0])
console.log([]["length"]);
console.log([1,2,3]["length"]);


function capitalize_Words(str)
{
  // Use the replace method with a regular expression to match words (\w) followed by zero or more non-space characters (\S*)
  // For each matched word, use a callback function to capitalize the first character and convert the rest of the characters to lowercase
  
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words("Furqan moin ud din hafeez ullah"))

let str = "Hello world! 123_test done.";
let result = str.match(/\w\S*/g);
console.log(result);