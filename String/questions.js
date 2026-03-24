
//

// Write a function to replace all spaces in a string with underscores without using .replace().
// How would you find the first occurrence of a character in a string without using .indexOf()?
// Write a function to check if a string is a palindrome without using built-in reverse or comparison methods.

//1




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
console.log(str2);


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
console.log(compareStrings(string, string2))

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
console.log(CountVowels(str));


// How would you convert all lowercase letters in a string to uppercase without using .toUpperCase()?
let arr = 97-65;
console.log(arr);
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

console.log(UpperCase("furqan")); // FURQAN

// function getGraphemeCount(str) {
//   const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
  // The Segments object iterator that is used here iterates over characters in grapheme clusters,
  // which may consist of multiple Unicode characters
//   return [...segmenter.segment(str)].length;
// }
// console.log(String.fromCharCode()); // 
// console.log(getGraphemeCount("👌❤️✔️😊")); // 1

// How can you check if a string contains only numbers without using .match() or .includes()?



