console.log("1" + 2);
console.log(2 + "1")
console.log("1" + 2+2);
console.log(2 + 2 + "1");
/*
if number in start then it will be first operated then
concat into string.
*/
let first = "My Country is Pakistan";       
//now if i have to add the Pakistan in Double quotes or single quotes we can either
// use escape character or we can use template literals
console.log("My Country is \"Pakistan\"")
console.log('My Country is \'Pakistan\'');
console.log(`My Country is "Pakistan"`)

//six other escaping characters are \n, \t, \r, \b, \f, \\
console.log("My Country is \nPakistan")
console.log("My Country is \tPakistan")
// \n is new line and it is used to break the line and move the cursor to the next line. It is supported in all browsers and it is commonly used for formatting text.
console.log("My Country is \rPakistan")
//\r is carriage return and it is used to move the cursor to the beginning of the line. It is not supported in all browsers and it is not recommended to use it.
console.log("My Country is \fPakistan")
//\f is form feed and it is used to break the line and move the cursor to the next line. It is not supported in all browsers and it is not recommended to use it.
console.log("my countery is \bPakistan");
//\b is backspace and it is used to move the cursor back by one position. It is not supported in all browsers and it is not recommended to use it.
console.log("My Country is \\Pakistan")
//\\ is used to escape the backslash character itself. It is used when you want to include a backslash in your string.  
console.log("My Country is \tPakistan")
//\t is horizontal tab and it is used to move the cursor to the right by a certain number of spaces. It is supported in all browsers and it is commonly used for formatting text.
console.log("My Country is \vPakistan")
//v is vertical tab and it is used to move the cursor down by one line. It is not supported in all browsers and it is not recommended to use it.
