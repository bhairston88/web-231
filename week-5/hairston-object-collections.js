/*
============================================
; Title:  hairston-object-collections.js
; Author: Professor Krasso
; Date:   24 June 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to create an
; object collection and output the contents
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston', 'Object Collections'))

//start program

//collection of objects

var composers = [
{
  firstName: "Claude",
  lastName: "Debussy",
  genre: "Classical",
  rating: 9
},
{
  firstName: "Ludwig van",
  lastName: "Beethoven",
  genre: "Classical",
  rating: 6
},
{
  firstName: "Wolfgang Amadeus",
  lastName: "Mozart",
  genre: "Classical",
  rating: 8
},
{
  firstName: "Antonio",
  lastName: "Vivaldi",
  genre: "Classical",
  rating: 7
},
{
  firstName: "Johann",
  lastName: "Strauss",
  genre: "Classical",
  rating: 6
}
];

//new line
console.log("\n");

//output
console.log("--COMPOSERS--");
composers.forEach(function(music) {
  console.log("Last Name: " + music.lastName + ", " + "Genre: " + music.genre + ", " + "Rating: " + music.rating)
});
