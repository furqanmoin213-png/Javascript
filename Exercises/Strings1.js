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



