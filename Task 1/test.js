//TypeScript 
// 1.support validate from Static typing 
// 2.Compatibility with JavaScript
// 3.Compatibility with JavaScript
// TS task 1 : 
// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
var num = 5;
if (num % 2 == 0)
    console.log("Number (".concat(num, ") is Even"));
else
    console.log("Number (".concat(num, ")is odd"));
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
var price = [20, 50, 70, 90];
var target = 30;
price.forEach(function (element) {
    if (element > 30)
        console.log("".concat(element, "    "));
});
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
var arr = [20, 50, 708, 990, 40, 10];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num_1 = arr_1[_i];
    sum += num_1;
}
console.log(sum);
var pi = 3.14;
console.log("The value of pi is: ".concat(pi));
// String
var message = 'Hello, TypeScript!';
console.log(message);
// Number
var age = 30;
// Boolean
var isActive = true;
// Any: يمكن استخدامه لأي نوع من البيانات
var randomValue = 42;
randomValue = "Now I am a string";
console.log(randomValue);
// Unknown: يشبه any لكن مع ضرورة التحقق من النوع قبل استخدامه
var unknownValue = "This could be anything";
if (typeof unknownValue === 'string') {
    console.log("UnknownValue is " + unknownValue.length); // سيتم التحقق من النوع أولاً
}
// 3. Arrays
var numbers = [1, 2, 3, 4, 5];
var fruits = ['Apple', 'Banana', 'Cherry'];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// let mixedArray: (string | number | boolean)[] = ['Hello', 42, true];
// 4. Conditional Statements
var userAge = 20;
if (userAge >= 18) {
    console.log('You are an adult.');
}
else {
    console.log('You are a minor.');
}
// 5. Loops
for (var i = 0; i < 5; i++) {
    console.log("Index: ".concat(i));
}
var count = 0;
while (count < 5) {
    console.log("Count: ".concat(count));
    count++;
}
// Null و Undefined
var nothing = null;
var notDefined = undefined;
