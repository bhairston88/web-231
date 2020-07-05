/*
============================================
; Title:  hairston-assignment-6-4.js
; Author: Professor Krasso
; Date: 5 July 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to create and ouput
; nested object literals
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Nested Object Literals'))

//start program

//variable declaration

var ticket = {
  id: 205,
  name: "Help Desk",
  dateCreated: "July 5th 2020",
  priority: "high",
  person: {
    id: 12,
    firstName: "Brandy",
    lastName: "Mathews",
    jobTitle: "Programmer I"
    }
  }
//new line
  console.log("\n");
//output
  console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");
