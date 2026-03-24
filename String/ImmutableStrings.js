let str = new String("Furqan Moin");
let str2 = str;
str2 = "Furqan";
console.log(str);
console.log(str2);
//str2 value didn`t change because string is immutable in javascript. It means that once a string is created, it cannot be changed. When we try to change the value of str, it creates a new string and assigns it to str, but str2 still holds the original string value. So when we log str2, it will still show "Furqan Moin".

//mutable data types are those data types which can be changed after they are created. For example, arrays and objects are mutable data types in javascript. When we change the value of an array or an object, it changes the original array or object. But when we change the value of a string, it creates a new string and assigns it to the variable, but the original string remains unchanged. So strings are immutable in javascript.
let arr = [1, 2, 3];
let arr2=arr;
arr2.push(4);
console.log(arr);
console.log(arr2);
//arr2 value changed because array is mutable in javascript. It means that once an array is created, it can be changed. When we try to change the value of arr, it changes the original array and assigns it to arr, but arr2 still holds the original array value. So when we log arr2, it will show [1, 2, 3, 4].

let arr3 = [...arr];

//to make it mutable we can use spread operator to create a new array and assign it to arr2, but it is not recommended to use spread operator for creating array because it creates a new array and it is not a primitive data type. It is better to use array literal for creating array.

arr3.push(5);
console.log(arr);
console.log(arr3);
//arr3 value changed because array is mutable in javascript. It means that once an array is created, it can be changed. When we try to change the value of arr, it changes the original array and assigns it to arr, but arr3 still holds the original array value. So when we log arr3, it will show [1, 2, 3, 4, 5].

let arr4 = new Array(arr);
arr4.push(6);
console.log(arr);
console.log(arr4);
//arr4 value changed because array is mutable in javascript. It means that once an array is created, it can be changed. When we try to change the value of arr, it changes the original array and assigns it to arr, but arr4 still holds the original array value. So when we log arr4, it will show [1, 2, 3, 4, 6].
