/*
============================================
; Title:  hairston-arrays.js
; Author: Professor Krasso
; Date:   17 June 2020
; Modified by: Brooklyn Hairston
; Description:
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Header'))

//start program

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

function getValue(arr, filterValue) {
  for (let x = 0; x < arr.length; x++)
    if (arr[x] === filterValue) {
      return arr[x];
  }
}

//output
console.log("\n");
console.log("--DISPLAYING NAMES--");
for (let x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

console.log("\n");

console.log("--SELECTED VALUE--");
console.log(getValue(vehicles, "Motorcycle"));

console.log("\n");

console.log("--SELECTED VALUE--");
console.log(getValue(vehicles, "Bus"));
