/*
============================================
; Title:  hairston-exercise-6-2.js
; Author: Professor Krasso
; Date: 2 July 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to create and use
; a try/catch/finally statement
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Exception Handling'))

//start program

try {

  //variable declaration
  var x = "Tuesday";
  var y = "Sunday";
  var weekend = x + y;

 //if statement
if (x !== "Saturday") throw "Not The Weekend";
  console.log(weekend);

//output
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached . . .");
}
