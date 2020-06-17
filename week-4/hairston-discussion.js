/*
============================================
; Title:  hairston-discussion.js
; Author: Brooklyn Hairston
; Date:   17 June 2020
; Modified by: Brooklyn Hairston
; Description: array program with two errors
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Header'))

//program without errors
//expected output My favorite book is Ella Enchanted.

var Books = ["Howl's Moving Castle", "Good Omens", "Fire", "Ella Enchanted"]

for (let x = 3; x < Books.length; x++) {
  console.log("My favorite book is " + Books[x] + ".");
}


//program with two errors
//expected output My favorite book is Ella Enchanted.

var Books = {"Howl's Moving Castle", "Good Omens", "Fire", "Ella Enchanted"}

//output

for (let x = 3; x > Books.length; x++) {
  console.log("My favorite book is " + Books[x] + ".");
}
