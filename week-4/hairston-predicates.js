/*
============================================
; Title:  hairston-predicates.js
; Author: Professor Krasso
; Date:   21 June 2020
; Modified by: Brooklyn Hairston
; Description: Displays how to use the filter() method
; by declaring and using a predicate
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Predicates'))

//start program

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

/**
 * Params: one, two
 * Response: true/false
 * Description: Returns true or false given the comparison
 */

function getStates(one, two) {
  if (one === two)
  return true;
}

//output

console.log("\n");
console.log("--ORIGINAL ARRAY--");
for (let x = 0; x < states.length; x++) {
  console.log(states[x]);
}

console.log("\n");
console.log("--SORTED ARRAY--");
states.sort().forEach(state => console.log(state));

console.log("\n");
console.log("--SELECTED VALUE--");
console.log(
  states.filter(function(one) {
    return getStates(one, "Iowa")
  })[0]
);
