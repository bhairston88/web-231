/*
============================================
; Title:  hairston-exercise-6-2.js
; Author: Professor Krasso
; Date: 2 July 2020
; Modified by: Brooklyn Hairston
; Description:
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Object Literals'))

//start program

var ticketing = {
  id: "19204",
  name: "IT Support",
  requestor: "Jane Doe"
};

console.log("{id: " + ticketing.id + ", name: " + ticketing.name + ", requestor: " + ticketing.requestor + "}");
