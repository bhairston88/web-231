/*
============================================
; Title:  hairston-functions.js
; Author: Brooklyn Hairston
; Date:   5 June 2020
; Description: Demonstrates how to create functions with and without parameters
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Functions'))


//start program
/**
 * Params: firstName, lastName
 * Response: firstName + " " + lastName
 * Description: returns string firstName lastName
 */

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

var firstName = "Brooklyn";
var lastName = "Hairston";

/**
 * Params: year, month, day
 * Response: new Date(year, month, day)
 * Description: returns new date
 */

function dateWriter(year, month, day) {
  return new Date(year, month, day);
}

var year = 2020;
var month = 5;
var day = 5;

/**
 * Params: number, numOfFixedPositions
 * Response: number.toFixed(numOfFixedPositions)
 * Description: returns the value of number with the value of numOfFixedPositions digits after the decimal point
 */
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

var number = 84.5;
var numOfFixedPositions = 1;

/**
 * Params: age
 * Response: a string parameter
 * Description: returns the value of the string parameter
 */

function convertToInt(age) {
  return age;
}

var age = parseInt("32 years old");

/**
 * Params: savings
 * Response: a string parameter
 * Description: returns the value of the string parameter
 */

function convertToFloat(savings) {
  return savings;
}

var savings = parseFloat(" 10000.00 dollars");

//output
console.log("\n");
console.log("Hello my name is " + fullName(firstName, lastName) + "!");
console.log("\n");
console.log("Today's date is " + dateWriter(year, month, day) + " and the current temperature is " + formatNumber(number, numOfFixedPositions) + " degrees.");
console.log("\n");
console.log("I am " + convertToInt() + " years old" + " and my savings account goal is " + convertToFloat(savings) + " dollars.");


