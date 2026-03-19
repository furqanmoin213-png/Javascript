//primitive is stored in stack and reference is stored in heap

//primitive data types
let a = 10; // stored in stack
let b = a; // stored in stack
//it will create a copy of a and store in b
console.log(a, b);
a = 20;
console.log(a, b);
//non-primitive data types is stored in heap and its name is stored in stack
let arr1 = [1, 2, 3];
let arr2 = arr1;
//it will not create a copy of arr1 and store in arr2 but it will store the reference of arr1 in arr2
console.log(arr1, arr2);
arr1.push(4);//we only pushed in arr1 but as arr2 is reference of arr1 it will also change in arr2
console.log(arr1, arr2);