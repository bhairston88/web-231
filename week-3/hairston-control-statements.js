/*
============================================
; Title:  hairston-control-statements.js
; Author: Professor Krasso
; Date:   10 June 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to create switch statements
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Control Statements'))

//start program

let eventKeyCode = 13

/**
 * Param: eventKeyCode
 * Response: switch statement
 * Description: returns the switched on string sentence
 */

switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;

  case 16:
    console.log('The shift key was pressed.');
    break;

  case 32:
    console.log('The spacebar key was pressed');
    break;

  case 8:
    console.log('The backspace / delete key was pressed.');
    break;

  default:
    console.log('Unrecognized key.');
    break;
}
