let x = null;
console.log(x)
let xx = x;
xx = 5;
console.log(x)
//x value will be same as null is a primitive datatype
console.log(null == undefined)//loosely equal to undefined
console.log(null === undefined)
console.log(null == false)//only loosely equal to undefined
console.log(null == "")
console.log(null == [])
console.log(null == 0)
console.log(null >= 0)
console.log(null <= 0)//its rather greater than or smaller than equals to 0
console.log(null > 0)
console.log(null < 0)
console.log(typeof null === "object")//this is a bug in js but it is not going to be fixed because of backward compatibility
console.log(null == null)
console.log(null == {} , null == [])
console.log("2" + 55, 3 + 5 - "2")
console.log("55" - 33, 2+3+"55");
console.log("55"- "33");
console.log(JSON.stringify({ a: null })) 
// '{"a":null}'

function test(x = 10) {
  return(console.log(x))
}

test(undefined); // 10
test(null);      // null
//as undefined says its undefined == same value while null is a value.

