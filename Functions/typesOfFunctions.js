function greet()
{
    console.log("Greet")
}
greet();
function GreetingLog(fn)
{
    fn();
}
//its first class function where a function is passed as a parameter to another function.
const greetOutput = GreetingLog(greet);


//function expression

let hello = function()
{
    console.log("Hello");
}
// hello()

//use the function expression on the fly

GreetingLog(function()
{
    console.log("Hello");
});

