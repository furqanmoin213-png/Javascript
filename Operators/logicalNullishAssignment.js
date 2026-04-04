let obj = {
    "name" : "Furqan"
}
obj.name ??= "Rehan";
obj.age ??= 21;
//The nullish coalescing assignment (??=) operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).
console.log(obj.age);
console.log(obj)

function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

//Using nullish coalescing assignment
// You can use the nullish coalescing assignment operator to apply default values to object properties. Compared to using destructuring and default values, ??= also applies the default value if the property has value null.
console.log(config({ duration: 125 })); // { duration: 125, speed: 25 }
console.log(config({}))// { duration: 100, speed: 25 }