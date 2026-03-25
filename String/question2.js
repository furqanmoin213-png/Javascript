//Convert first letter of each word to uppercase
//👉 "hello world" → "Hello World"

function CapitalizeFirstLetters(str)
{
    let str2= Object.assign([], str);
    for(let index in str2)
    {
        if(index==0 || str2[index-1]==" ")
        {
            str2[index]=str2[index].toUpperCase();
        }
    }
    return str2.join("");
}
let str = "rehan moin ud din";
console.log(CapitalizeFirstLetters(str));