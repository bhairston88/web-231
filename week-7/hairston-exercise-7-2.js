/*
============================================
; Title:  hairston-exercise-7-2.js
; Author: Professor Krasso
; Date: 9 July 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to create and
; use constructor functions
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Constructor Functions'))

//start program

/**
 * Params: id, firstName, lastName, title
 * response: void
 * Description: sets the title, id and name of an object
 */

function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//variables
var employees = [
  new employee("1", "Sam", "Wilson", "Manager"),
  new employee("2", "Steve", "Rogers", "Assistant Manager"),
  new employee("3", "James", "Barnes", "Stock Supervisor"),
  new employee("4", "Sharon", "Carter", "Lead Cashier"),
  new employee("5", "Natasha", "Romanoff", "Marketing Supervisor")
]

//new line
console.log("\n");

//output
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + " " + employees[x].firstName + " " + employees[x].lastName + " " + employees[x].title)
}
