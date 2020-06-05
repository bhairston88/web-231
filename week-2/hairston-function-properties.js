/*
============================================
; Title:  hairston-function-properties.js
; Author: Brooklyn Hairston
; Date:   3 June 2020
; Description: Demonstrates how to define and call function properties
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Function Properties'))

//start program

//function property

myName.brooklyn = "Brooklyn Hairston";

/**
 * Params: 0
 * Response: Function property value
 * Description: Returns value assigned to the function property
 */

function myName() {
  return myName.brooklyn;
}

//output

console.log("Hello, my name is " + myName());
