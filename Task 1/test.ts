//TypeScript
// 1.support validate from Static typing
// 2.Compatibility with JavaScript
// 3.Compatibility with JavaScript

// TS task 1 :

// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.

let num: number = 5;
if (num % 2 == 0) console.log(`Number (${num}) is Even`);
else console.log(`Number (${num})is odd`);

// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.

let price: number[] = [20, 50, 70, 90];

let target: number = 30;

price.forEach((element) => {
  if (element > target) console.log(`${element}    `);
});

// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.

let arr: number[] = [20, 50, 708, 990, 40, 10];

let sum: number = 0;

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
const pi: number = 3.14;
console.log(`The value of pi is: ${pi}`);
// String
let message: string = "Hello, TypeScript!";
console.log(message);
// Number
let age: number = 30;

// Boolean
let isActive: boolean = true;

// Any: يمكن استخدامه لأي نوع من البيانات
let randomValue: any = 42;
randomValue = "Now I am a string";
console.log(randomValue);

// Unknown: يشبه any لكن مع ضرورة التحقق من النوع قبل استخدامه

let unknownValue: unknown = "This could be anything";
if (typeof unknownValue === "string") {
  console.log("UnknownValue is " + unknownValue.length); // سيتم التحقق من النوع أولاً
}

// 3. Arrays
let numbers: number[] = [1, 2, 3, 4, 5];

let fruits: string[] = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// let mixedArray: (string | number | boolean)[] = ['Hello', 42, true];

// 4. Conditional Statements
let userAge: number = 20;

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 5. Loops
for (let i = 0; i < 5; i++) {
  console.log(`Index: ${i}`);
}

let count: number = 0;
while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}

// Null و Undefined
let nothing: null = null;
let notDefined: undefined = undefined;
