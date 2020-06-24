/*
============================================
; Title:  hairston-built-in-functions.js
; Author: Professor Krasso
; Date:   24 June 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to loop through an array
; using the forEach function
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston', 'Built-in Functions'))

//start program

//array declaration

var favFoods = ["potatoes", "cheese", "pasta", "fruit", "burritos"];

//new line
console.log("\n");

//output

favFoods.forEach(function(food) {
  console.log(food)
});
