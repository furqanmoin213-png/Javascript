// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
const name = null ?? "Furqan" ?? "Rehan";
console.log(name);
// Expected output: "default string"

const baz = "Furqan"  ?? 42;
console.log(baz);
// Expected output: 0
