
// Write a function to reverse a string manually.
function reverseString(str)
{
    let element ="";
     for (let index = str.length - 1; index >= 0; index--) {
        element += str[index];
       
         

        
    }
    // return element.join(" ").replaceAll("undefined", "");
    return element;
}
let str = "furqan MOin";
let str2 = reverseString(str);
console.log(`${str} reversed is "${str2}"`);


//2

// How would you compare two strings to check if they are equal without using .localeCompare()?
function compareStrings(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true;
}
let string = "Furqan Moin";
let string2 = "Furqan Moin";
console.log(`${string} and ${string2} are ${compareStrings(string, string2) ? 'equal' : 'not equal'}`);

// Write a function to count the number of vowels in a string.

function CountVowels(str)
{   
    let arr = str.split("");
    let count =0;
    for(let index=0; index<arr.length; index++)
    {
        if(arr[index] == "a" || arr[index] =="e" || arr[index] =="i" || arr[index]=="o" || arr[index] == "u"){
            count += 1;
        }
    }
    return count;
}
console.log(`${str} has ${CountVowels(str)} vowels.`);


// How would you convert all lowercase letters in a string to uppercase without using .toUpperCase()?

function UpperCase(str)
{
    let arr = str.split("");
    let str2 = "";

    for(let index = 0; index < arr.length; index++)
    {
        if(arr[index] !== " " && /[a-z]/i.test(arr[index]))
        {
            str2 += String.fromCharCode(str.charCodeAt(index) - 32);
        }
        else
        {
            str2 += arr[index];
        }
    }

    return str2;
}

console.log(`${UpperCase("furqan")} is the uppercase version of "furqan"`); // FURQAN

// function getGraphemeCount(str) {
//   const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
  // The Segments object iterator that is used here iterates over characters in grapheme clusters,
  // which may consist of multiple Unicode characters
//   return [...segmenter.segment(str)].length;
// }
// console.log(String.fromCharCode()); // 
// console.log(getGraphemeCount("👌❤️✔️😊")); // 1

// How can you check if a string contains only numbers without using .match() or .includes()?

const strs = "1234567890";
function isNumeric(str) {
for(let index = 0; index < str.length; index++)
{
    if(str.charCodeAt(index) < 48 || str.charCodeAt(index) > 57)
    {
        console.log("String contains non-numeric characters.");
        return false;
    }
}
return  true;
    
};

console.log(`${strs} is ${isNumeric(strs) ? 'numeric' : 'not numeric'}`);

function isAlphanumeric(str) {
    for(let index = 0; index < str.length; index++)
    {
        if((str.charCodeAt(index) < 48 || str.charCodeAt(index) > 57) && (str.charCodeAt(index) < 65 || str.charCodeAt(index) > 90) && (str.charCodeAt(index) < 97 || str.charCodeAt(index) > 122))
        {
            console.log("String contains non-alphanumeric characters.");
            return false;
        }
    }
    return true;
}

let strs2 = "FurqanMoin123";
console.log(`${strs2} is ${isAlphanumeric(strs2) ? 'alphanumeric' : 'not alphanumeric'}`);

function isAlphabetic(str) {
    for(let index = 0; index < str.length; index++)
    {
        if((str.charCodeAt(index) < 65 || str.charCodeAt(index) > 90) && (str.charCodeAt(index) < 97 || str.charCodeAt(index) > 122))
        {
            console.log("String contains non-alphabetic characters.");
            return false;
        }
        return true;
    }
}
let strs3 = "FurqanMoin";
console.log(`${strs3} is ${isAlphabetic(strs3) ? 'alphabetic' : 'not alphabetic'}`);

// Write a function to replace all spaces in a string with underscores without using .replace().

let str3 = "Furqan Moin ud din ";
function replaceSpaces(str)
{
    return str.trim().split(" ").join("-");
}
console.log(`Original: "${str3}"`);
console.log(`Modified: "${replaceSpaces(str3)}"`);

// Write a function to check if a string is a palindrome without using built-in reverse or comparison methods.



function isPalindrome(str)
{
    let end=str.length-1;
    let istrue = false;
    for(let index=0; index<str.length; index++)
    {
        if(str[index] !== str[end])
        {
            return false;
            
        }
        else
        {

            istrue = true;
             end--;

        }       
    }
    return istrue;
}
let str4="furqan";
console.log(`Is "${str4}" a palindrome? ${isPalindrome(str4)}`);


// How would you find the first occurrence of a character in a string without using .indexOf()?



let str5 = "Furqan";



function findFirstOccurrence(str, char) {

    for(let index = 0; index < str.length; index++)
    {
        if(str[index] === char)
        {
            return index;
        }   
    }
    return -1;
}
const valid = findFirstOccurrence(str5, "u");
if(valid !== -1)
{
    console.log(`Character found at index: ${valid}`);
}
