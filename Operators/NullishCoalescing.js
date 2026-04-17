// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let name= null;
const result = name ?? "Furqan" ?? "Ali";
console.log(result);
// Expected output: "Furqan"    

const baz = "Furqan" ?? 42;
console.log(baz);
// Expected output: "Furqan"
