/*
Write a JavaScript function to check whether an 'input' is a string or not.Scripting Languages

Test Data :

console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
*/

function is_string(input)
{
    return typeof input === "string" || input instanceof String;
}
console.log(is_string("W3resource"))

function is_string2(input)
{
    return Object.prototype.toString.call(input) === "[object String]";
}

console.log(is_string2("W3resource"))

/*
Write a JavaScript function to check whether a string is blank or not.

Test Data :

console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
*/
function is_Blank(str)
{
    return str.length === 0;
}

console.log(is_Blank(""))
console.log(is_Blank("abc"))

/*
Write a JavaScript function to split a string and convert it into an array of words.

Test Data :

console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]


*/
//my method
function string_to_array(str)
{
    let arr = [];
     let num = 0;
     let strs = [];
     for(let index=0; index<str.length; index++)
     {
        if(str[index] == " " )
        {
            arr.push(strs.toString());
            strs = "";
        }
        else
            strs += str[index];


     }
    arr.push(strs.toString());
     return arr;
}

let str = "Furqan Moin";
//ai method

function string_to_array2(str)
{
    let arr = [];
    let str2 = "";
    for(let index=0; index<str.length; index++)
    {
        if(str[index] !== " ")
        {
            str2 += str[index];
        }
        else        {
            arr.push(str2);
            str2 = "";
        }   
    }
    arr.push(str2);
    return arr;
}
console.log(string_to_array(str))


/*
Write a JavaScript function to extract a specified number of characters from a string.

Test Data :

console.log(truncate_string("Robin Singh",4));
"Robi"
*/
function truncate_string(str, num)
{let str2="";
    for(let index=0; index<num ; index++)
    {
        str2 += str[index];
    }
    return str2;
}

console.log(`Truncate String Of String "${str}" first 4 characters will be \n${truncate_string(str, 8)}`)

/*
6. Hide Email Address

Write a JavaScript function that hides email addresses to prevent unauthorized access.

Test Data :

console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protect_email(email)
{
    let splitted = email.trim().split("@");
    let part1 = splitted[0];
    let avg = (part1.length/2)
    part1 = part1 .slice(0, part1.length - avg)
    part2 = splitted[1];
    return part1+".....@"+part2;
}
console.log(protect_email('furqanmoin213@gmail.com'))

/*
7. Parameterize String

Write a JavaScript function to parameterize a string.

Test Data :

console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/



function string_parameterize(str)
{
   
    str = str.trim();
    let strs ="";
    for(let index=0; index<str.length; index++)
    {
        if(str.charCodeAt(index) <= 96 && str.charCodeAt(index) >= 65 )
        {
            strs += String.fromCharCode(str.charCodeAt(index)+32);
        }
        else if (str.charCodeAt(index) == 32)
        {
            strs += "-";
        }
        else
            strs += str[index];
    }
    return strs;
}
let name = " Furqan Moin ";
console.log(string_parameterize(name));

/*
9. Capitalize Each Word

Write a JavaScript function to capitalize the first letter of each word in a string.

Test Data :

console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/

function capitalize_Words(str){
    let str2="";
    if (!/^[A-Za-z\s]+$/.test(str)) {
        return "Invalid string";
    }
    for(let index=0; index<str.length; index++)
    {
        
        // if((/[A-Z]/.test(str[index])))
        if(str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 96)
            str2+=str[index]
        else if (index == 0 || str[index-1] == " "){
            str2 += String.fromCharCode(str.charCodeAt(index) -32)

        }
        else
            str2+= str[index]
        
        
    }

    return str2;
}
str = "Full Name of furqan";
console.log(capitalize_Words(str))

/*
10. Swap Case

Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

Test Data :

console.log(swapcase('AaBbc'));
"aAbBC"
*/
function swapcase(str)
{
    let str2 = "";
    let isvalid = str.split('').every(ch =>
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= 'a' && ch <= 'z') ||
        ch == " "
    );
    if(!isvalid)
    {
        return "Invalid String"
    }
    for(let index=0; index<str.length; index++)
    {
        if(str.charCodeAt(index) >=65 && str.charCodeAt(index) <=90)
        {
            str2 += String.fromCharCode(str.charCodeAt(index) +32)
        }
        else if(str[index]==" ")
            str2 += str[index];
        else 
             str2 += String.fromCharCode(str.charCodeAt(index) - 32)
    }
    return str2;
}
console.log(swapcase("Furqan Moin"))