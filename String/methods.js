let email = "   furqan moin   ";
console.log(email);
console.log(email.length);
console.log(email.charAt(6));
console.log(email.at(-4));
console.log(email.trim())
console.log(email.charCodeAt(function(){return 6}()));
console.log(email.codePointAt(7))
console.log(email.concat("ud din", " ", "Hafeez ullah"));
console.log(email.slice(1,10))
console.log(email.slice(-17, -7))
console.log(email.substring(1, 10))

console.log(email.toLowerCase())
console.log(email.toUpperCase());
console.log(email.isWellFormed())

let str="hello \uD83D\uDEE world";
console.log(str)
console.log(str.isWellFormed())
str = str.toWellFormed();
console.log(str)
console.log(str.isWellFormed())

//it is used to check if the string is well formed or not. It returns true if the string is well formed and false if it is not well formed. A string is considered well formed if it does not contain any unpaired surrogate code points. An unpaired surrogate code point is a code point that is not part of a valid surrogate pair. A surrogate pair is a pair of code points that are used to represent a single character in the Unicode standard. The first code point in a surrogate pair is called the high surrogate and the second code point is called the low surrogate. The high surrogate must be in the range of 0xD800 to 0xDBFF and the low surrogate must be in the range of 0xDC00 to 0xDFFF. If a string contains an unpaired surrogate code point, it is not considered well formed and the isWellFormed() method will return false. The toWellFormed() method is used to convert a string that is not well formed into a well formed string by replacing any unpaired surrogate code points with the Unicode replacement character (U+FFFD). The Unicode replacement character is a special character that is used to indicate that a character could not be represented in the original string. It is commonly used to replace invalid characters in a string.

let string = "1234";
let name = "Furqan";
console.log(string.padStart(10, "*"))
console.log(string.padStart(10))
console.log(string.padEnd(10,  "*"))
console.log(string.padEnd(10))
//padStart() method is used to pad the string with a specified character until the string reaches a specified length. The first argument is the target length of the string and the second argument is the character to pad the string with. If the second argument is not provided, it will default to a space character. The padEnd() method is used to pad the string at the end instead of the start.

let str1 = "hello Hello HELLO world";
console.log(string.repeat(2));
console.log(str1.replace("hello", "hi"))

console.log(str1.replace(/hello/ig, "hi"))

console.log(str1.replaceAll("hello", "hi"))
//replace() method is used to replace a specified value with another value in a string. The first argument is the value to be replaced and the second argument is the value to replace it with. If the first argument is a string, only the first occurrence of the value will be replaced. If the first argument is a regular expression with the global flag (g), all occurrences of the value will be replaced. If the first argument is a regular expression with the ignore case flag (i), it will replace all occurrences of the value regardless of case. The replaceAll() method is used to replace all occurrences of a specified value with another value in a string. It works similarly to the replace() method with the global flag (g) but it does not require a regular expression as the first argument.
console.log(str1.replaceAll(/hello/ig,"hi"));

console.log(str1.split(" "))

str1= str1.split(" ")

console.log(str1.join(" "))

function reverseString(str) {
    
    return str.split("").reverse().join("");
}
str= new String("Furqan")
console.log(str.split("").reverse().join(""));

