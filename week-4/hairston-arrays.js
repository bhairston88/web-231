/*
============================================
; Title:  hairston-arrays.js
; Author: Professor Krasso
; Date:   17 June 2020
; Modified by: Brooklyn Hairston
; Description: Displays how to write and call arrays
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Header'))

//start program

var fruits = ["Apple", "Banana", "Orange", "Mango", "Pear"];

/**
* Params: array
* Response: Values of the fruits array
* Description: Writes the contents of the array to the console window
*/

function getFruit(arr) {
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x]);
  }
}

//output
getFruit(fruits);
for (let x = 0; x < fruits.length; x++) {
  console.log(fruits[x]);
}

