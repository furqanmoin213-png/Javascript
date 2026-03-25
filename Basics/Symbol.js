const id = Symbol("123");
console.log(id)
console.log(typeof id)
const id2 = Symbol("123");
console.log(id === id2)
//Symbols are unique and immutable data type that can be used as identifiers for object properties. Each time you create a new Symbol, it is guaranteed to be unique, even if it has the same description.
