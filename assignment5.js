"use strict";
// QUESTION 01
// Write a program that uses filter to remove all negative numbers 
// from an array of numbers;
const array1 = [-1, 2, -3, -4, 5, 6, 7, -7, -8, 8, 9, 9, -11, -13, 16];
const UpdateArray1 = array1.filter(function (value) {
    return value >= 0;
});
console.log("QUESTION # 1 ANS", UpdateArray1);
// const array11:number[]=[1,2,3,4,5,6,7,7,8,8,9,9,11,13,16];
// const UpdateArray11:number[]=array11.filter(function(value){
// if(value%2==0){
//     return value;
// }
// else{
//     return false;
// }
// });
// console.log(UpdateArray11);
// QUESTION 02
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to 
// create a new array where each number is multiplied by 2.
const array2 = [11, 22, 33, 44, 55];
const UpdateArray2 = array2.map(function (value2) {
    return value2 * 2;
});
console.log("QUESTION # 2 ANS", UpdateArray2);
// QUESTION 03
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
// use the filter method to create 
// a new array containing only the fruits with more than 5 characters.
const array3 = ["apple", "banana", "cherry", "date", "grape"];
const UpdateArray3 = array3.filter(function (value) {
    return value.length > 5;
});
console.log("QUESTION # 3 ANS", UpdateArray3);
// QUESTION 04
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the 
// map and filter methods together to create a new array containing the 
// squares of even numbers.
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const UpdateArray4 = array4.filter(function (value) {
    if (value % 2 == 0) {
        return value;
    }
});
const UpdateArray44 = UpdateArray4.map((value) => {
    return value * 2;
});
console.log("QUESTION # 4 ANS", UpdateArray44);
// QUESTION 05
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], 
// use the map method to create a new array where each 
// temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const array5 = [0, 10, 20, 30, 40];
const UpdateArray5 = array5.map((Celsius) => {
    return Celsius * 1.8 + 32;
});
console.log("QUESTION # 5 ANS", UpdateArray5);
//QUESTION 6
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods 
// together to create a new array containing the doubled values of odd numbers.
const array6 = [3, 6, 9, 12, 15, 18];
const UpdateArray6 = array6.filter((value) => {
    if (value % 2 != 0) {
        return value;
    }
});
const UpdateArray66 = UpdateArray6.map((value) => {
    return value * 2;
});
console.log("QUESTION # 6 ANS", UpdateArray66);
// QUESTION 07
// Given an array of names , 
// use the forEach method to log each name with an exclamation mark at the 
// end, e.g., "Alice!".
const array7 = ["Alice", "Bob", "Charlie", "David", "Emily"];
array7.forEach((value) => {
    console.log(value, "!");
});
