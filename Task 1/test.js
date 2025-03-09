"use strict";
//TypeScript
// 1.support validate from Static typing
// 2.Compatibility with JavaScript
// 3.Compatibility with JavaScript
// TS task 1 :
// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
let num = 5;
if (num % 2 == 0)
    console.log(`Number (${num}) is Even`);
else
    console.log(`Number (${num})is odd`);
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
let price = [20, 50, 70, 90];
let target = 30;
price.forEach((element) => {
    if (element > target)
        console.log(`${element}    `);
});
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
let arr = [20, 50, 708, 990, 40, 10];
let sum = 0;
for (let num of arr) {
    sum += num;
}
console.log(sum);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////
//////////////////////////////
////////////////////////////////////////
const pi = 3.14;
console.log(`The value of pi is: ${pi}`);
// String
let message = "Hello, TypeScript!";
console.log(message);
// Number
let age = 30;
// Boolean
let isActive = true;
// Any: يمكن استخدامه لأي نوع من البيانات
let randomValue = 42;
randomValue = "Now I am a string";
console.log(randomValue);
// Unknown: يشبه any لكن مع ضرورة التحقق من النوع قبل استخدامه
let unknownValue = "This could be anything";
if (typeof unknownValue === "string") {
    console.log("UnknownValue is " + unknownValue.length); // سيتم التحقق من النوع أولاً
}
// 3. Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// let mixedArray: (string | number | boolean)[] = ['Hello', 42, true];
// 4. Conditional Statements
let userAge = 20;
if (userAge >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}
// 5. Loops
for (let i = 0; i < 5; i++) {
    console.log(`Index: ${i}`);
}
let count = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}
// Null و Undefined
let nothing = null;
let notDefined = undefined;
