/*
============================================
; Title:  hairston-loops.js
; Author: Professor Krasso
; Date:   11 June 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to create
; and use for loops
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Loops'))

//start program

//variable declaration
var x = 3;

/**
 * Params: x,y
 * Response: if . . . else statement
 * Description: returns true if params match and false if not
 */

function match(x,y) {
  if (x==y) {
    return true;
  } else {
    return false;
  }
}

/**
 * Params: a,b
 * Response: a string message
 * Description: returns the value of the string message
 */

function logMismatch(a,b) {
  return a + " and " + b + " do not match!";
}

/**
 * Params: c,d
 * Response: a string message
 * Description: returns the value of the string message
 */

function logMatch (c,d) {
  return c + " and " + d + " do match!";
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
}

//output

for (y = 0; y < 10; y++) {
  var y = (randomNumber());
    if (match(x,y)) {
  console.log(logMatch(x,y));
    } else {
  console.log(logMismatch(x,y));
  }
}
