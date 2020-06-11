/*
============================================
; Title:  hairston-pattern-matching-functions.js
; Author: Brooklyn Hairston
; Date:   10 June 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to use pattern
; matching functions for logical error handling
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Pattern Matching Functions'))

//start program

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

//variables

var a = "Truck";
var b = "Car";
var c = "Bike";
var d = "Bike";
var x = "Three";
var y = "Four";

//output
console.log("\n");
console.log(match(x,y));

if (match (a,b)) {
  console.log(logMatch(a,b));
} else {
  console.log(logMismatch(a,b));
}

if (match (c,d)) {
  console.log(logMatch(c,d));
} else {
  console.log(logMismatch(c,d));
}

if (match (x,y)) {
  console.log(logMatch(x,y));
} else {
  console.log(logMismatch(x,y));
}
