const email = new String("FurqanMoin");
console.log(email);

console.log(email.__proto__.anchor("Jolly"))
console.log(email.__proto__.big())
console.log(email.__proto__.blink())
console.log(email.__proto__.bold())
console.log(email.__proto__.charAt(2))
console.log(email.charCodeAt(1))
console.log(email.codePointAt(1))
console.log(email.concat(" ", "is", " ", "my", " ", "email"))
console.log(email.endsWith("com"))
console.log(email.includes("Moin"))
console.log(email.indexOf("Moin"))
console.log(email.lastIndexOf("Moin"))

console.log(email.toUpperCase())
console.log(email.toLowerCase())
